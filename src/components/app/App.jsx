import React, {useEffect, useState} from 'react';

import AppHeader from "../app-header";
import PostList from "../post-list";
import SearchPanel from "../search-panel";
import PostAdd from "../post-add-form";
import {PostStatus} from "../post-status";
import {Modal} from "../modal-window";
import {getAllPost, getPostId} from '../../fetch-data';
import {ErrorMsg} from "../error-message";
import {Unknown} from '../../assets'


import {AppWrapper} from "./styled";
import {Spinner} from "../spinner";


const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // getAllPost().then(data=>console.log(data.data))

  useEffect(() => {
    getAllPost().then(res => {
      setPosts(res.data)
      setLoading(false)
    }).catch(onError)


  }, [])


  const onDelete = (id) => {
    setPosts(data => {
      const idx = data.findIndex(elem => elem.id === id)

      return [...data.slice(0, idx), ...data.slice(idx + 1)]
    })
  };


  const addItem = (text) => {

    const newItem = {
      first_name: text,
      avatar: Unknown,
      id: new Date().getTime(),
      status: false,
      like: false,
    }

    setPosts(data => {
      if (text.trim()) {
        return [...data, newItem]
      }
      return data
    })
  }

  const onToggleLike = (e, id) => {
    if (e.detail === 2) {
      setPosts(data => {
        const idx = data.findIndex(elem => elem.id === id)

        return [...data.slice(0, idx), {
          ...data[idx], like: !data[idx].like
        }, ...data.slice(idx + 1)]
      })
    }
  }

  const onToggleStars = (id) => {
    setPosts(data => {
      const idx = data.findIndex(elem => elem.id === id)

      return [...data.slice(0, idx), {
        ...data[idx], status: !data[idx].status
      }, ...data.slice(idx + 1)]
    })
  };

  const likes = posts.filter(item => item.like).length;

  const searchPost = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.first_name.indexOf(searchValue) > -1
    })
  };

  const onUpdateSearchPanel = (value) => {
    setSearchValue(value)
  };


  const filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  const onUpdateFilter = (value) => {
    setFilter(value)
  }

  const handleSearchPost = filterPost(searchPost(posts, searchValue), filter);

  const modalData = (data) => {
    setModal(data.data)
  }

  const onError = () => {
    setError(true)
    setLoading(false)
  }

  const onOpenModal = (id) => {
    setModalVisible(!modalVisible)
    getPostId(id)
      .then(res => modalData(res))
  }

  const onCloseModal = (id) => {
    setModalVisible(!modalVisible)
    setModal([])
  }

  const errorComponent = error ? <ErrorMsg/> : null

  return (
    <AppWrapper>
      <h1>Lesson-75 </h1>
      <AppHeader postCount={handleSearchPost.length} likesCount={likes}/>
      <SearchPanel onUpdateSearchPanel={onUpdateSearchPanel}/>
      <PostStatus
        filter={filter}
        onUpdateFilter={onUpdateFilter}
      />
      {errorComponent}
      {loading ? <Spinner/> : <PostList
        posts={handleSearchPost}
        onDelete={onDelete}
        onToggleLike={onToggleLike}
        onToggleStars={onToggleStars}
        onOpenModal={onOpenModal}
      />}
      <PostAdd addItem={addItem}/>
      <Modal
        modalVisible={modalVisible}
        onCloseModal={onCloseModal}
        modalContent={modal}
      />
    </AppWrapper>
  );
};

export default App;