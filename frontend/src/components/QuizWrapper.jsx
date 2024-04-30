import './QuizWrapper.scss'

export function QuizWrapper({ title, children }) {
    return (
      <div className="wraper">
        <h2 className="wraper-title">
          {title}
        </h2>
        <div className="wraper-section">
          {children}
        </div>
      </div>
    )
}