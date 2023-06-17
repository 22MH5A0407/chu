
<html>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css"/>
</head>

<body>
    <div class="button-maker-bg-container p-4">
        <h1 class="button-maker-heading text-center mb-4">SGPA calculator</h1>

            <div class="container bg-light form-cont">
                <h1 class="form-heading mb-4">Enter your Grades</h1>
                <form id="myForm">


                    <div class="small-cont">
                        <div class="mb-3 mr-4">
                            <label for="gra1">Subject1 Grade</label>
                            <input type="text" maxlength=2 minlength="1" class="form-control" id="gra1" placeholder="Grade" />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                          <div class="mb-3">
                            <label for="cre1">Subject1 Credicts</label>
                            <input type="text" maxlength=3 minlength="1" class="form-control" id="cre1" placeholder="credicts " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                    </div>


                    <div class="small-cont">
                        <div class="mb-3 mr-4">
                            <label for="gra2">Subject2 Grade</label>
                            <input type="text" maxlength=2 minlength="1" class="form-control" id="gra2" placeholder="Grade " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                          <div class="mb-3">
                            <label for="cre2">Subject2 Credicts</label>
                            <input type="text" maxlength=3 minlength="1" class="form-control" id="cre2" placeholder="credicts " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                    </div>


                    <div class="small-cont">
                        <div class="mb-3 mr-4">
                            <label for="gra3">Subject3 Grade</label>
                            <input type="text" maxlength=2 minlength="1" class="form-control" id="gra3" placeholder="Grade " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                          <div class="mb-3">
                            <label for="cre3">Subject3 Credicts</label>
                            <input type="text" maxlength=3 minlength="1" class="form-control" id="cre3" placeholder="credicts " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                    </div>


                    <div class="small-cont">
                        <div class="mb-3 mr-4">
                            <label for="gra4">Subject4 Grade</label>
                            <input type="text" maxlength=2 minlength="1" class="form-control" id="gra4" placeholder="Grade " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                          <div class="mb-3">
                            <label for="cre4">Subject4 Credicts</label>
                            <input type="text" maxlength=3 minlength="1" class="form-control" id="cre4" placeholder="credicts " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                    </div>


                    <div class="small-cont">
                        <div class="mb-3 mr-4">
                            <label for="gra5">Subject5 Grade</label>
                            <input type="text" maxlength=2 minlength="1" class="form-control" id="gra5" placeholder="Grade " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                          <div class="mb-3">
                            <label for="cre5">Subject5 Credicts</label>
                            <input type="text" maxlength=3 minlength="1" class="form-control" id="cre5" placeholder="credicts " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                    </div>


                    <div class="small-cont">
                        <div class="mb-3 mr-4">
                            <label for="gra6">Subject6 Grade</label>
                            <input type="text" maxlength=2 minlength="1" class="form-control" id="gra6" placeholder="Grade " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                          <div class="mb-3">
                            <label for="cre6">Subject6 Credicts</label>
                            <input type="text" maxlength=3 minlength="1" class="form-control" id="cre6" placeholder="credicts " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                    </div>


                    <div class="small-cont">
                        <div class="mb-3 mr-4">
                            <label for="gra7">Subject7 Grade</label>
                            <input type="text" maxlength=2 minlength="1" class="form-control" id="gra7" placeholder="Grade " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                          <div class="mb-3">
                            <label for="cre7">Subject7 Credicts</label>
                            <input type="text" maxlength=3 minlength="1" class="form-control" id="cre7" placeholder="credicts " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                    </div>


                    <div class="small-cont">
                        <div class="mb-3 mr-4">
                            <label for="gra8">Subject8 Grade</label>
                            <input type="text" maxlength=2 minlength="1" class="form-control" id="gra8" placeholder="Grade " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                          <div class="mb-3">
                            <label for="cre8">Subject8 Credicts</label>
                            <input type="text" maxlength=3 minlength="1" class="form-control" id="cre8" placeholder="credicts " />
                            <p id="nameErrMsg" class="error-message"></p>
                          </div>
                    </div>


                 <div class="btn-div">
                  <button class="btn btn-primary" id="submit">Submit</button>
                </div>
                  <p id="result" class="result"></p>
                </form>
              </div>
        </div>





    <script src="index.js"></script>
</body>

</html>
let result = document.getElementById("result");
let btn = document.getElementById("submit");
let form =  document.getElementById("myForm");


function marksCalculation(grade){
    let marks = 0;
    console.log(grade,typeof(grade),"^^^^^^^^^^^");
    if(grade==="A+"){
        marks = 10
    }
    else if(grade==="A"){
        marks = 9
    }
    else if(grade==="B"){
        marks = 8
    }
    else if(grade==="C"){
        marks = 7
    }
    else if(grade==="D"){
        marks = 6
    }
    else if(grade==="E"){
        marks = 5
    }
    else if(grade==="F"){
        marks = 0
    }
    else{
        marks = -1;
    }

    return marks;
}

let error  = false;

form.addEventListener("submit",function(event){
    event.preventDefault();

    let total_product = 0,total_cre = 0;

    for(let i=0;i<8;i++){

        let credits = document.getElementById(`cre${i+1}`);
        let credict_float= parseFloat(credits.value);
        total_cre+=(credict_float);
    }

    for(let i=0;i<8;i++){

        let grade = document.getElementById(`gra${i+1}`).value;
        let credits = document.getElementById(`cre${i+1}`);
        let credict_float= parseFloat(credits.value);
        let gradeValue = marksCalculation(grade);

        if(gradeValue===-1){
            error = true;
            break;
        }
        else{
            total_product+=(gradeValue*credict_float);
        }
    }
    let sgpa = total_product/total_cre;

    if(error===false){
        console.log("anitha");
        console.log(result);
        result.textContent = "SCPA is "+sgpa;
    }
    else{
        console.log("sai");
        result.textContent ="please enter valid data";
    }









}) 
