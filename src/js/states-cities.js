for(let states in statesCities) {
    $('#state').append('<option value="' + states + "\">" + states + '</option>');
}

const fillCities = () => {
    if($('#state').val() == "default") {
        $('#city').find('option').remove();
        $('#city').append('<option value="default">Choose City..</option>');
        $('#city').attr('disabled', true);
    } else {
        const stateSelected = $('#state').val();
        $('#city').removeAttr('disabled');
        $('#city').find('option').remove();

        const cities = statesCities[stateSelected];
        cities.forEach(city => {
            $('#city').append('<option value="' + city + "\">" + city + '</option>');
        });
    }
}