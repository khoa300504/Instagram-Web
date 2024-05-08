import { useState } from 'react'
import { toast } from 'react-toastify'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

function usePreviewImg() {
  const [postPic, setPostPic] = useState(null)

  const handleImgChange = async e => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/'))
    {
      const storageRef = firebase.storage().ref()
      const fileRef = storageRef.child(file.name)
      try {
        const snapshot = await fileRef.put(file)
        const downloadURL = await snapshot.ref.getDownloadURL()
        setPostPic(downloadURL)
      } catch (error) {
        toast.error('Error uploading file')
      }
    }
    else {
      toast.error('Wrong type')
      setPostPic(null)
    }
  }

  const handleAfterShare = () => {
    setPostPic(null)
  }

  return { handleImgChange, handleAfterShare, postPic }
}

export default usePreviewImg