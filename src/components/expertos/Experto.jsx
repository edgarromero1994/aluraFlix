import "./Experto.css"

const Experto = () => {
  return   <section id="experts">
  <h1>Community Experts</h1>
  <p>Learn from the best in the industry with hands-on experience and expert guidance</p>
  <div className="expert-box">
      <div className="profile">
          <img src="https://media.licdn.com/dms/image/C4D03AQH3ktT_oTahKQ/profile-displayphoto-shrink_800_800/0/1656104979762?e=1724889600&v=beta&t=7AYb1GB_QlhhUQcwwzu_OA64R-0kK54y2o-IOLR5eOA" alt=""/>
          <h6>Crhistian Velazco</h6>
          <p>Python & Algorithm Expert</p>
          <div className="pro-links">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
          </div>
      </div>

      <div className="profile">
          <img src="https://media.licdn.com/dms/image/C4E03AQF4uSz8MAKJzA/profile-displayphoto-shrink_800_800/0/1628522680433?e=1724889600&v=beta&t=zq9nQJvoUDVCJM8ghuT9svr0mgllzZzJVUNOVBvDgiI" alt=""/>
          <h6>Leonardo Castillo</h6>
          <p>Python & Algorithm Expert</p>
          <div className="pro-links">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
          </div>
      </div>
      
  </div>
  </section>
}

export default Experto