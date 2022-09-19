export interface IAdmin {
	_id?: string
	name: string
	token: string
	password: string
	profile_pic: File | { key: string; link: string }
}
