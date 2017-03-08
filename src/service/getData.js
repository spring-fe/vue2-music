import * as music from './tempdata/music'

const setPromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

export const daymusic = () => setPromise(music.daymusic);
export const types = () => setPromise(music.types);
export const hotpush = () => setPromise(music.hotpush);
