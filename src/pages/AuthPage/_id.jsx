import SignIn from '~/components/SignIn/_id'
import SignUp from '~/components/SignUp/_id'
import { useRecoilValue } from 'recoil'
import authStateAtom from '~/atoms/authStateAtom'

function AuthPage() {
  const authState = useRecoilValue(authStateAtom)
  return (
    <>
      {authState === 'login' ? <SignIn/> : <SignUp/>}
    </>
  )
}

export default AuthPage