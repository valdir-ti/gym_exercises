import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import Detail from '../../components/Detail'
import ExerciseVideos from '../../components/ExerciseVideos'
import SimilarExercises from '../../components/SimilarExercises'

import { fetchData, exerciseOptions, youtubeOptions } from '../../utils'

const ExerciseDetail = () => {

  const { id } = useParams()

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetExercises, setTargetExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideoData.contents)

      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetExercises(targetMuscleExerciseData)

      const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(equipmentExerciseData)
    }

    fetchExerciseDetail()
  }, [id])

  return (
    <Box>
      <Detail
        exerciseDetail={exerciseDetail}
      />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetExercises={targetExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  )
}

export { ExerciseDetail }