import "./Coding.css"
import React from 'react'

const Coding = () => {
  return (
    <div className="coding">
      <div className="card-container">
        <div className="card">
            <h3>-LEETCODE-</h3>
            <span className="bar"></span>
            <p className="rating">Rating : 1657</p>
            <p>-Total Problems Solved : 663-</p>
            <p>-Easy Problems Solved : 252-</p>
            <p>-Medium Problems Solved : 392-</p>
            <p>-Hard Problems Solved : 19-</p>
            <p>-Ranking : 60,376/398,523(Global)-</p>
            <a href="https://leetcode.com/mad_fkn_hur/" className="btn">Visit Leetcode</a>
        </div>
        <div className="card">
            <h3>-CODEFORCES-</h3>
            <span className="bar"></span>
            <p className="rating">Rating : 1203</p>
            <p>-Total Problems Solved : 103-</p>
            <p>-Total Contests : 16-</p>
            <p>-Tag : Pupil-</p>
            <p>-Ranking : 13(Intitutional),35033(Global)-</p>
            <a href="https://codeforces.com/profile/madhurrrrr" className="btn">Visit Codeforces</a>
        </div>
        <div className="card">
            <h3>-CODECHEF-</h3>
            <span className="bar"></span>
            <p className="rating">Rating : 1690(3 Star)</p>
            <p>-Total Problems Solved : 94-</p>
            <p>-Total Contests : 23-</p>
            <p>-Best Gloabl Rank : 258-</p>
            <p>-Ranking : 51(Intitutional),19597(Global)-</p>
            <a href="https://www.codechef.com/users/madhur69" className="btn">Visit Codechef</a>
        </div>
      </div>
    </div>
  )
}

export default Coding
