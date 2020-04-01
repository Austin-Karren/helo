import axios from 'axios';

const initialState = {
   id: NaN,
   title: '',
   img: '',
   content: '',
   author_id: NaN,
   posts: []
}

// const GET_POSTS = 'GET_ALL_POSTS';

// export async function getPosts () {
//    const posts = await axios.get('/api/posts', {})
// }

export default function (state = initialState, action) {
   const {type, payload} = action;
   switch(type) {
      // case GET_ALL_POSTS: 
      //    return {...state, posts: payload}
      default: 
         return state;
   }
}