import "./Coding.css"
import React from 'react'

const Coding = () => {
  return (
    <div className="coding">
      <div className="card-container">
        <div className="card">
            <h3>-LEETCODE-</h3>
            <span className="bar"></span>
            <p className="rating">Rating : 1546</p>
            <p>-Total Problems Solved : 444-</p>
            <p>-Easy Problems Solved : 189-</p>
            <p>-Medium Problems Solved : 245-</p>
            <p>-Hard Problems Solved : 9-</p>
            <p>-Ranking : 106,494/355,439(Global)-</p>
            <a href="https://leetcode.com/mad_fkn_hur/" className="btn">Visit Leetcode</a>
        </div>
        <div className="card">
            <h3>-CODEFORCES-</h3>
            <span className="bar"></span>
            <p className="rating">Rating : 1193</p>
            <p>-Total Problems Solved : 283-</p>
            <p>-Total Contests : 35-</p>
            <p>-Best Gloabl Rank : 2450-</p>
            <p>-Ranking : 11(Intitutional),37920(Global)-</p>
            <a href="https://codeforces.com/profile/mad_fkn_hur" className="btn">Visit Codeforces</a>
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
