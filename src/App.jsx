import Header from "./components/Header"
import './global.css'
import styles from './App.module.css'
import Sidebar from "./components/Sidebar"
import Post from './components/Post'



const posts = [
  {
    id: 1, 
    author: {
      avatarUrl: 'github.com/walterssouto.png',
      name: 'Walters Souto',
      role: 'Desenvolvedor Web'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare' }
      
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },

  {
    id: 2, 
    author: {
      avatarUrl: 'https://www.github.com/walterssouto.png',
      name: 'Diego 3g',
      role: 'CTO RocketSeat'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare' }
      
    ],
    publishedAt: new Date('2022-07-20 15:30:00', 'dd/mm/YYY')
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map (post => {
            return (
              <Post 
                key={post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />)
          }
          )}
        </main>
      </div>
    </div>
   
    )
}

export default App