import React, { useEffect, useState } from "react"
import fetch from "isomorphic-unfetch"
import Link from "next/dist/client/link"

import { apiURL } from "utils/utils"
import { Character } from "types/types"

import Spinner from "../Spinner/Spinner"
import character from "@/pages/characters/[character]"

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [isloading, setIsloading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    fetch(`${apiURL}/character/?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
      })
      .catch(error => console.log(error))
      .finally(() => setIsloading(false))
  }, [page])
  return (
    <div>
      {isloading ? (
        <Spinner />
      ) : (
        <div className="container ">
          <div className="row  d-flex justify-content-center">
            {characters.map((character, index) => {
              return (
                <Link href={`/characters/${character.id}`} key={index}>
                  <a className="text-decoration-none text-dark text-center col-lg-3 col-md-4 col-sm-6 mx-2 my-2">
                    <div className="card">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="card-img-top"
                        width="70px"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                      </div>
                      <style jsx>{`
                        .card-img-top {
                          height: 100%;
                          width: 100%;
                        }
                        .card {
                          width: 17rem;
                        }
                        .card-title {
                          text-decoration: none;
                        }
                      `}</style>
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      )}
      <div className="text-center mt-2">
        <button
          onClick={() => setPage(prev => prev - 1)}
          disabled={page === 1}
          className="btn btn-warning btn-sm mx-2"
        >
          {"< prev"}
        </button>
        <button
          onClick={() => setPage(prev => prev + 1)}
          disabled={page === 34}
          className="btn btn-warning btn-sm"
        >
          {"next >"}
        </button>
      </div>
    </div>
  )
}

export default Characters
