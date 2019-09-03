"use strict";

window.canvasOptions = {
    //- autoClear: true,
    autoCompensate: false,
    autoPushPop: true,
    canvas: true,
    centered: true,
    width: null,
    height: null
};


function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var particles = [];
var padding = 200;

function setup() {
  for (var i = 0; i < 10; i++) {
    var p = new Particle();
    particles.push(p);
  }
}

function draw(e) {
  // rotate(e * 0.0001);
  // compositeOperation(compOper.lighter); // lineWidth(2);

  for (var i = particles.length - 1; i >= 0; i--) {
    var p = particles[i]; // if(p.dead) continue;

    if (p.dead) {
      particles.splice(i, 1);
      continue;
    }

    beginPath();
    circle(p.pos, 2); // line size
    p.pos.add(p.vel);
    ctx.shadowColor = hsl(p.hue, 100, 70, 1);
    ctx.shadowBlur = 0;
    var t = (e - p.lastChanged) / 50000; // split time
    fill(hsl(p.hue, 100, 60, 1)); // line color

    if (p.pos.x < -width_half - padding || p.pos.x > width_half + padding || p.pos.y < -height_half - padding || p.pos.y > height_half + padding) {
      if (p.splitable) {
        p.reset();
      } else {
        p.dead = true;
      }
    } else if (random(0.03, 1) < t) {
      p.lastChanged = e;
      p.pickDirection();

      if (particles.length < 300 && random(0.1, 1) < t) {
        var splitP = new Particle();
        splitP.splitable = false;
        splitP.pos.set(p.pos);
        splitP.vel.set(p.vel);
        splitP.pickDirection();
        particles.push(splitP);
      }
    }
  }
}

var Particle =
/*#__PURE__*/
function () {
  function Particle() {
    _classCallCheck(this, Particle);

    this.reset();
    this.splitable = true;
    this.dead = false;
  }

  _createClass(Particle, [{
    key: "reset",
    value: function reset() {
      this.lastChanged = performance.now();
      this.hue = random(130) + 180;
      this.pos = createVector(-25, 100);
      this.vel = createVector(2, 0);
      this.pickDirection([-2, -1, 0, 1, 2, 3]);
    }
  }, {
    key: "pickDirection",
    value: function pickDirection() {
      var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [-1, 0, 1];
      this.vel.rotate(random(range) * THIRD_PI);
    }
  }]);

  return Particle;
}();

$(document).ready(function () {
    var $form = $('#mc-embedded-subscribe-form')
    if ($form.length > 0) {
      $('form input[type="submit"]').bind('click', function (event) {
        if (event) event.preventDefault()
        register($form)
      })
    }
  })

  function register($form) {
    $('#mc-embedded-subscribe').val('Sending...');
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache: false,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
      success: function (data) {
        $('#mc-embedded-subscribe').val('Get Notifications')
        if (data.result === 'success') {
          // Yeahhhh Success
          console.log(data.msg)
          $('#mce-EMAIL').css('borderColor', '#ffffff')
          $('#subscribe-result').css('color', '#FFAD1C')
          $('#subscribe-result').html('<p>Thank you for subscribing. We have sent you a confirmation email.</p>')
          $('#subscribe-result p').css('margin-bottom', '0')
          $('h2').css('margin-top', '1rem')
          $('#mce-EMAIL').val('')
        } else {
          // Something went wrong, do something to notify the user.
          console.log(data.msg)
          $('#mce-EMAIL').css('borderColor', '#ff8282')
          $('#subscribe-result').css('color', '#ff8282')
          $('#subscribe-result').html('<p>' + data.msg.substring(4) + '</p>')
        }
      }
    })
  };
