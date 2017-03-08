import{
	RECORD_USER
} from './mutation-types.js'

export default {
	[RECORD_USER](state, username){
		state.username = username;
	}
}