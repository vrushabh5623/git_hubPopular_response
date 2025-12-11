// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachBtn, onBtnItemClick} = props
  const {id, language} = eachBtn

  const onBtnItem = () => {
    // console.log(event.target.value)
    onBtnItemClick(id)
  }
  return (
    <li>
      <button className="btn" type="button" onClick={onBtnItem}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
