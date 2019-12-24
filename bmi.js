$(document).ready(function() {
    $('#calculate').click(function(){
        var weight=$('#weight').val();
        var heigth=$('#heigth').val();
        var newheigth=heigth/100;
        var down=(newheigth*newheigth);
        var bm=weight/down;
        var bmi=bm.toFixed(2);
        var chnum=(isNaN(weight))||(isNaN(heigth));
        var empty=(weight.length<1||(heigth.length<1));
        var len=(heigth.length>3)||(weight.length>3);
        if (len) {
            $('#con').text('Values Not possible');
        }else{
            if (chnum||empty){
                $('#con').text('Please input a valid number');
            }else{
                $('#con').hide();
                $('#bm').text('Your BMI is: ');
                $('#solu').text(bmi);
                if (bmi<18.5) {
                    $('#dia').text('Diagnosis: ');
                    $('#resu').text('Underweight');
                    $('#eva').text('Evaluation: ');
                    $('#evalu').text('Nutritional risk');
                    $('#resu').removeClass(['text-secondary','text-success','text-warning']);
                    // $('#resu').removeClass('text-success');
                    // $('#resu').removeClass('text-warning');
                    $('#resu').addClass('text-danger');
                }else if ((bmi>=18.5)&&(bmi<=24.9)) {
                    $('#dia').text('Diagnosis: ');
                    $('#resu').text('Healthy');
                    $('#eva').text('Evaluation: ');
                    $('#evalu').text('Acceptable range');
                    $('#resu').removeClass(['text-secondary','text-danger','text-warning']);
                    // $('#resu').removeClass('text-danger');
                    // $('#resu').removeClass('text-warning');
                    $('#resu').addClass('text-success');
                }else if ((bmi>=25)&&(bmi<=29.9)) {
                    $('#dia').text('Diagnosis: ');
                    $('#resu').text('Overweight');
                    $('#eva').text('Evaluation: ');
                    $('#evalu').text('At risk for obesity');
                    $('#resu').removeClass(['text-secondary','text-danger','text-success']);
                    // $('#resu').removeClass('text-danger');
                    // $('#resu').removeClass('text-success');
                    $('#resu').addClass('text-warning');
                }else if ((bmi>=30)&&(bmi<=39.9)) {
                    $('#dia').text('Diagnosis: ');
                    $('#resu').text('Obese');
                    $('#eva').text('Evaluation: ');
                    $('#evalu').text('increased Health risk');
                    $('#resu').removeClass(['text-secondary','text-danger','text-success']);
                    // $('#resu').removeClass('text-danger');
                    // $('#resu').removeClass('text-success');
                    $('#resu').addClass('text-warning');
                }else if (bmi>40) {
                    $('#dia').text('Diagnosis: ');
                    $('#resu').text('Severely Obese');
                    $('#eva').text('Evaluation: ');
                    $('#evalu').text('Major Health risk');
                    $('#resu').removeClass(['text-secondary','text-warning','text-success']);
                    // $('#resu').removeClass('text-warning');
                    // $('#resu').removeClass('text-success');
                    $('#resu').addClass('text-danger');
                }            
            }
        }
        
    });
});