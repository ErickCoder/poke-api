import { useDispatch } from "react-redux"
import { setNameTrainer } from "../../store/slice/nameTrainer.slice"

const Header = () => {
  

  const dispatch=useDispatch()

  const handleClickLogout = () => {
  dispatch(setNameTrainer(""))
  }


  return (
    <div>
      <section className="relative">
        {/* red section  */}
        <div className="bg-red-600 h-20 relative">
          <div className="absolute left-0 bottom-0 w-[210px] xxs:w-[280px] sm:w-[400px] ">
            <img src="/images/logo.png" alt="" />
          </div>
        </div>

        {/* black section  */}
        <div className="bg-black h-12"></div>

        {/* pokeball button  */}
        <div className="h-20 aspect-square bg-white border-[10px] border-black rounded-full absolute -bottom-4 right-0 -translate-x-1/2 after:content-[''] after:h-11 after:aspect-square after:bg-gray-700 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px] after:border-black">
      <button onClick={handleClickLogout} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20">X</button>

        </div>
      </section>
    </div>
  )
}
export default Header
