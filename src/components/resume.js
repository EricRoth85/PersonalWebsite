import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://image.flaticon.com/icons/svg/145/145848.svg"
                alt="avatar"
                style={{ height: '200px'}}
                />
            </div>
            <h2 style={{paddingTop: '2em'}}>Eric Roth</h2>
            <h4 style={{color: 'grey'}}>Programmer / Video Producer / Urban Farmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '93%'}}/>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '93%'}}/>
            <h5>Email</h5>
            <p>ericdavidroth@gmail.com</p>
            <h5>Address</h5>
            <p>1417 W. Erie St, Chicago, IL 60642</p>
            <h5>Phone</h5>
            <p>(414) 791-1995</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '93%'}}/>


          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2003}
              endYear={2007}
              schoolName="University of Denver"
              schoolDescription="Digital Media Studies Major | Buisness Minor"
            />

            <Education
              startYear={2017}
              endYear={2018}
              schoolName="Fullstack Academy"
              schoolDescription="Teaching an advanced JavaScript curriculum, Fullstack Academy Chicago is the Midwest's premier coding bootcamp."
            />
              <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="first job"
              jobDescription="THis is the descripit of first fjoba"
            />
            <Experience
              startYear={2012}
              endYear={2014}
              jobName="second job"
              jobDescription="Second jsooiajgsdfljasldjflaksdjf"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={100}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="Ruby on Rails"
              progress={80}
            />
            <Skills
              skill="f"
              progress={100}
            />
            <Skills
              skill="javascript"
              progress={100}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
