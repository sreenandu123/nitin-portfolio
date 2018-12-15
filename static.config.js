import axios from 'axios'
import data from './data/data.js';

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const posts = data;
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/projects',
        component: 'src/containers/Projects',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        }))
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
