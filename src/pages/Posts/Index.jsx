import Card from "../../components/Card/Card"
import axios from 'axios'
import { useEffect, useState } from 'react';
import { BASE_API_URI } from "../../baseUrl"

export default function Index() {


    const [posts, setPosts] = useState([])

    function fetchPosts() {
        axios.get(`${BASE_API_URI}/posts`)
            .then(res => {
                setPosts(res.data.filteredPosts)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <main>
            <section>
                <div className='container'>
                    <h1 className='main_title'>Le nostre pizze</h1>
                </div>
                <div className="container">
                    <div>
                        {posts.map(post => (
                            <div className="row" key={post.id}>
                                <Card post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}