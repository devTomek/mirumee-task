import { get } from "../api";
import { IMovie } from "./types";

export const MOVIES_URL = "/films";

export const getMovies = () => get<IMovie[]>(MOVIES_URL);
