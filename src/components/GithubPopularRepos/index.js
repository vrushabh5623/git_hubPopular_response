import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
// console.log(languageFiltersData)

class GithubPopularRepos extends Component {
  state = {
    dataList: [],
    btnId: languageFiltersData[0].id,
    isLoader: true,
    responseFail: true,
  }

  componentDidMount = () => {
    this.getEachItem()
  }

  getEachItem = async () => {
    const {btnId} = this.state
    // console.log(btnId)
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${btnId}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      // console.log(data)
      const updateData = data.popular_repos.map(eachItem => ({
        avatarUrl: eachItem.avatar_url,
        forkCount: eachItem.forks_count,
        issuesCount: eachItem.issues_count,
        id: eachItem.id,
        name: eachItem.name,
        startCount: eachItem.stars_count,
      }))
      this.setState({dataList: updateData, isLoader: false, responseFail: true})
    } else if (response.status === 400) {
      this.setState({responseFail: false})
    }
  }

  onBtnItemClick = id => {
    this.setState({btnId: id, isLoader: true}, this.getEachItem)
  }

  render() {
    const {dataList, isLoader, responseFail} = this.state
    return (
      <div className="container">
        {responseFail ? (
          <>
            <h1 className="popular-head">Popular</h1>
            <ul className="un-list">
              {languageFiltersData.map(eachItem => (
                <LanguageFilterItem
                  eachBtn={eachItem}
                  key={eachItem.id}
                  onBtnItemClick={this.onBtnItemClick}
                />
              ))}
            </ul>
            <div className="item-container">
              {isLoader ? (
                <div data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color="#0284c7"
                    height={80}
                    width={80}
                  />
                </div>
              ) : (
                dataList.map(eachItem => (
                  <RepositoryItem eachDataItem={eachItem} key={eachItem.id} />
                ))
              )}
            </div>{' '}
          </>
        ) : (
          <h1>whron</h1>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
