import "./Coding.css"
import React from 'react'

const Coding = () => {
  return (
    <div className="coding">
      <div className="card-container">
        <div className="card">
            <h3>-LEETCODE-</h3>
            <span className="bar"></span>
            <p className="rating">Rating : 1766</p>
            <p>-Problems Solved : 763-</p>
            <p>-Ranked in Top 9.39% coders-</p>
            <p>-Best Global Contest Rank : 2018-</p>
            <p>-Overall Rank 21,045-<br/>-Contest Rank : 37,529-</p>
            <a href="https://leetcode.com/mad_fkn_hur/" className="btn">Visit Leetcode</a>
        </div>
        <div className="card">
            <h3>-CODEFORCES-</h3>
            <span className="bar"></span>
            <p className="rating">Rating : 1203</p>
            <p>-Total Problems Solved : 103-</p>
            <p>-Tag : Pupil-</p>
            <p>-Best Global Contest Rank : 2450-</p>
            <p>-Ranking : 13(Intitutional)<br/>35033(Global)-</p>
            <a href="https://codeforces.com/profile/madhurrrrr" className="btn">Visit Codeforces</a>
        </div>
        <div className="card">
            <h3>-CODECHEF-</h3>
            <span className="bar"></span>
            <p className="rating">Rating : 1690</p>
            <p>-Total Problems Solved : 94-</p>
            <p>-3 Star Coder-</p>
            <p>-Best Global Contest Rank : 258-</p>
            <p>-Ranking : 51(Intitutional)<br/>19597(Global)-</p>
            <a href="https://www.codechef.com/users/madhur69" className="btn">Visit Codechef</a>
        </div>
      </div>
    </div>
  )
}

export default Coding
