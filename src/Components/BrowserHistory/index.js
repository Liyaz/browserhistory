import './index.css'

const BrowserHistory = props => {
  const {historyList, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="lis">
      <div className="space">
        <div className="lists">
          <p className="para1">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="mediaImg" />
          <p className="para1">{title}</p>
          <p className="para2">{domainUrl}</p>
        </div>
        <button type="button" className="buttons" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-button"
            onClick={onDelete}
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
