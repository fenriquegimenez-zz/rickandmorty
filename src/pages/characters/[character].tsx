import React, { useState, useEffect } from "react"
import fetch from "isomorphic-unfetch"

import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"

import Spinner from "@/components/Spinner/Spinner"

import { apiURL } from "utils/utils"
import { Character } from "types/types"

const character = () => {
  const [characterDetail, setCharacterDetail] = useState<Character>()
  const [isloading, setIsloading] = useState<boolean>(true)

  const router = useRouter()
  const { character } = router.query

  useEffect(() => {
    fetch(`${apiURL}/character/${character}`)
      .then(response => response.json())
      .then(data => {
        setCharacterDetail(data)
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsloading(false)
      })
  }, [])

  return isloading ? (
    <Spinner />
  ) : (
    <div className="text-center">
      <h1 className="text-center my-5">{`${characterDetail?.name} ${
        characterDetail?.status === "Alive" ? "🟢" : "🔴"
      }`}</h1>
      <img
        className="img-thumbnail rounded"
        src={characterDetail?.image}
        alt={characterDetail?.name}
      />
      <p className="mt-3">Location: {characterDetail?.location?.name}</p>
      <Link href="/">
        <a className="my-3 text-dark">Volver</a>
      </Link>
    </div>
  )
}

export default character
