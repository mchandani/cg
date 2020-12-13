import React from 'react';
import ques from './questions';
import questions from './questions';
class Questionare extends React.Component{
    constructor(props){
        super(props);
        this.state={
            finalScore:{
                "Sales Scoring": 0,
                "Stress scoring": 0,
                "Communication scoring": 0
            }
        }
        this.calcScore = this.calcScore.bind(this);
    }

    calcScore(){
        let score = {
            "Sales Scoring": 0,
            "Stress scoring": 0,
            "Communication scoring": 0
        };
        var ele = document.getElementsByTagName('input'); 
              
            for(let i = 0; i < ele.length; i++) { 
                  
                if(ele[i].type="radio") { 
                  
                    if(ele[i].checked){
                        const val = ele[i].value.split(',').map(x=>parseInt(x));
                        console.log(val);
                        score["Sales Scoring"]+=val[0];
                        score["Stress scoring"]+=val[1];
                        score["Communication scoring"]+=val[2];
                    }
                } 
            } 
            console.log(score);
        this.setState({
            finalScore:score,
        })
    }

    render(){
        let q_list = [];
        for (let i = 1; i < ques.length; i+=6) {
            let q_obj = {
                questionnaire:'',
                answers:{
                    "StronglyAgree":[],
                    "Agree":[],
                    "Neutral":[],
                    "Disagree":[],
                    "StronglyDisagree":[]
                }
            }
            if(ques[i].questionnaire!==''){
                q_obj.questionnaire = ques[i].questionnaire;
                q_obj.answers = {
                    "StronglyAgree": [
                        ques[i]["Sales Scoring"],
                        ques[i]["Stress scoring"],
                        ques[i]["Communication scoring"]
                    ],
                    "Agree":[
                        ques[i+1]["Sales Scoring"],
                        ques[i+1]["Stress scoring"],
                        ques[i+1]["Communication scoring"]
                    ],
                    "Neutral":[
                        ques[i+2]["Sales Scoring"],
                        ques[i+2]["Stress scoring"],
                        ques[i+2]["Communication scoring"]
                    ],
                    "Disagree":[
                        ques[i+3]["Sales Scoring"],
                        ques[i+3]["Stress scoring"],
                        ques[i+3]["Communication scoring"]
                    ],
                    "StronglyDisagree":[
                        ques[i+4]["Sales Scoring"],
                        ques[i+4]["Stress scoring"],
                        ques[i+4]["Communication scoring"]
                    ]
                };
                q_list.push(q_obj);
            }
        }
        let i=0;
        const questions = q_list.map((q)=>{
            i++;
            return(
                <div>
                    <p>Q{i}:-{q.questionnaire}</p>
                    <input type="radio" name={'a'+i} value={q.answers.StronglyAgree}/>
                    <label>Strongly Agree</label>
                    <br/>

                    <input type="radio" name={'a'+i} value={q.answers.Agree}/>
                    <label>Agree</label>
                    <br/>

                    <input type="radio" name={'a'+i} value={q.answers.Neutral}/>
                    <label>Neutral</label>
                    <br/>
                    
                    <input type="radio" name={'a'+i} value={q.answers.Disagree}/>
                    <label>Disagree</label>
                    <br/>
                    
                    <input type="radio" name={'a'+i} value={q.answers.StronglyAgree}/>
                    <label>Strongly Disagree</label>
                    <br/><br/>
                </div>
            );
        })
        return(
            <div className="container p-5">
                <h1>Questionare</h1><br /><br />
                <form>
                    {questions}
                </form>
                <button onClick={this.calcScore}>SUBMIT</button>
                <h1 id="result">
                    {this.state.finalScore["Communication scoring"]+"\t"}
                    {this.state.finalScore["Sales Scoring"]+'\t'} 
                    {this.state.finalScore["Stress scoring"]+'\t'} 
                </h1>
            </div>
        );
    }
}

export default Questionare