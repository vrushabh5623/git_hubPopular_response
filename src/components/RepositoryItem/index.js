// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachDataItem} = props
  const {avatarUrl, forkCount, issuesCount, name, startCount} = eachDataItem
  return (
    <div className="repository-container">
      <img src={avatarUrl} alt="" className="avatar-image" />
      <p className="name">{name}</p>
      <div>
        <div className="star-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="star-img"
          />
          <p className="star-para">{startCount} stars</p>
        </div>
        <div className="star-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="star-img"
          />
          <p className="star-para">{forkCount} forks</p>
        </div>
        <div className="star-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="star-img"
          />
          <p className="star-para">{issuesCount} open issues</p>
        </div>
      </div>
    </div>
  )
}

export default RepositoryItem
