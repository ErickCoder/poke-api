import { useDispatch } from 'react-redux'
import FooterHome from '../components/home/FooterHome'
import { setNameTrainer } from '../store/slice/nameTrainer.slice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameTrainer = e.target.nameTrainer.value
    dispatch(setNameTrainer(nameTrainer))
    navigate('/pokedex')
  }
  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      {/* top section  */}
      <section>
        <div>
          <img src="/images/logo.png" alt="" />
        </div>
        <h3 className="text-red-500 font-bold">Hello trainer!</h3>
        <p>For start, give me your name</p>

        <form onSubmit={handleSubmit} action="">
          <input required type="text" className="shadow-md" id="nameTrainer" />
          <button className="bg-red-400 px-4 text-white">Start!</button>
        </form>
      </section>

      {/* buttom section  */}
      <FooterHome />
    </main>
  )
}
export default Home
