export const state = () => ({
  a: 'sdfsdfsdfsdf',
  auth: {
    isAuth: false,
    name: 'name',
    password: ''
  },
});

export const mutations = {
  // addLogin(state:any, name:string, password:string) {
  addLogin(state, name, password) {
    state.auth.isAuth = true;
    state.auth.name = name;
    state.auth.password = password;
  },
  // removeLogin(state:any) {
  removeLogin(state) {
    state.auth = {
      isAuth: false,
      name: '',
      password: ''
    }
  },
}

export const getters = {
  getName: (state) => {
    return state.auth.name;
  },
}
