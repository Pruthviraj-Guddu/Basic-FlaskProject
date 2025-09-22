//<!-- Pruthviraj Mundargi pm935@drexel.edu -->
//<!-- CS530: DUI, Assignment 2 -->

function RentView() {
    var self = this;
    console.log("log: rent page loaded");

    this.loadBikes = function() {
        $.get('/api/get_bikes', self.renderBikes);
    };

    this.renderBikes = function(bikes) {
        var tableBody = $('#bike-table tbody').empty();
    
        bikes.forEach(function(bike) {
            var row = $('<tr>').appendTo(tableBody);
            $('<td>').html('<img src="' + bike.image + '" alt="' + bike.name + '" style="max-width: 100px;">').appendTo(row);
            $('<td>').text(bike.name).appendTo(row);
            var availability = $('<td>').text(bike.available).appendTo(row);
            var buttons = $('<td>').appendTo(row);
            var plusButton = $('<button>').addClass('btn btn-sm btn-primary plus-button').text('+').appendTo(buttons);
            var minusButton = $('<button>').addClass('btn btn-sm btn-danger minus-button').text('-').data('id', bike.id).appendTo(buttons);
            if (bike.available === 0) {
                row.addClass('unavailable');
                minusButton.prop('disabled', true);
                plusButton.prop('disabled', true);
            }
        });
    };

    this.updateAvailability = function(bikeId, availability) {
        $.post('/api/update_bike', { id: bikeId, available: availability }, self.loadBikes);
    };

    this.resetBikes = function(availability) {
        $.post('/api/reset_bikes', { available: availability }, self.loadBikes);
    };

    //eventListening
    $('#reset-button').click(function() {
        self.resetBikes(3);
        //$.get('/api/get_bikes', self.renderBikes);
        console.log("log: reset button");

    });

    $('#bike-table').on('click', '.plus-button', function() {
        var row = $(this).closest('tr');
        var availability = parseInt(row.find('td:nth-child(3)').text()) + 1;
        row.find('td:nth-child(3)').text(availability);
        self.updateAvailability(row.find('.minus-button').data('id'), availability);
    });

    $('#bike-table').on('click', '.minus-button', function() {
        var row = $(this).closest('tr');
        var availability = parseInt(row.find('td:nth-child(3)').text()) - 1;
        row.find('td:nth-child(3)').text(availability);
        if (availability === 0) {
            row.addClass('unavailable');
            row.find('.minus-button').prop('disabled', true);
        }
        self.updateAvailability($(this).data('id'), availability);
    });

    this.loadBikes();
}

var rentView = new RentView();
