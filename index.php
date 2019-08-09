<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- CSS for bootstrap 4 + additional styling-->
    <link rel="stylesheet" href="bootstrap-4.3.1/css/bootstrap.css">
    <link rel="stylesheet" href="styles.css">
    <!-- Scripts for bootstrap 4 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <!-- Script for fontawesome (used for in-game symbols and settings menu) -->
    <script src="https://kit.fontawesome.com/<<%¥|π×>>.js"></script>
    
    <title>Tic Tac Toe</title>
</head>
<body>
    <!-- Navigation bar (auto extended) -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" >Tic Tac Toe</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  <div class="collapse show navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto mt-2">
      <li class="nav-item mr-2 mb-2">
          <button type="button" class="btn btn-info btn-lg btn-block" onclick="restartGame()">Replay</button>
        </li>
        <li class="nav-item mr-2 mb-2">
            <button type="button" class="btn btn-info btn-lg btn-block" onclick="coreAutoPlay()">Autoplay</button>
        </li> 
        <!-- https://github.com/DionPotkamp/TicTacToe -->
        <li class="nav-item mr-2 mb-2">
            <a class="nav-link" href="https://github.com/DionPotkamp/TicTacToe"><i class="fab fa-github github"></i></a>
        </li> 
        </ul>
    <!-- Text output field -->
    <span class="navbar-text mr-5 text" id="text">
        &nbsp;
    </span>
    <br />
    <span class="navbar-text">
        <!-- Field for statistics -->
        <div class="stats">
            Player X wins: <span id="Xwins">0</span><br>
            Player O wins: <span id="Owins">0</span><br>
            Players draw: <span id="draws">0</span><br>
        </div>
    </span>
</div>
</nav>
<!-- The actual play field -->
<div class="canvas mt-3 p-0 mx-auto" id="canvas">
    <div class="cell border p-0 m-0" id="00" onclick="core('00')"></div>
    <div class="cell border p-0 m-0" id="01" onclick="core('01')"></div>
    <div class="cell border p-0 m-0" id="02" onclick="core('02')"></div>
    <div class="cell border p-0 m-0" id="10" onclick="core('10')"></div>
    <div class="cell border p-0 m-0" id="11" onclick="core('11')"></div>
    <div class="cell border p-0 m-0" id="12" onclick="core('12')"></div>
    <div class="cell border p-0 m-0" id="20" onclick="core('20')"></div>
    <div class="cell border p-0 m-0" id="21" onclick="core('21')"></div>
    <div class="cell border p-0 m-0" id="22" onclick="core('22')"></div>
</div>

<!-- Button for the settings -->
<button type="button" class="btn btn-info settings" data-toggle="modal" data-target="#settings"><i class="fas fa-cog"></i></button>
<!-- Modal for the settings -->
<div class="modal fade" id="settings" tabindex="-1" role="dialog" aria-labelledby="settingsLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="settingsLabel">Settings</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <button type="button" id='speed' class="btn btn-info btn-lg btn-block" onclick="autoplaySpeed()">Set&nbsp;autoplay&nbsp;speed</button>
            <button type="button" id='iteration' class="btn btn-info btn-lg btn-block" onclick="autoplayIt()">Set&nbsp;autoplay&nbsp;iterations</button>
            <button type="button" id='score' class="btn btn-info btn-lg btn-block" onclick="autoplayScore()">Add&nbsp;autoplay&nbsp;to&nbsp;score</button>
            <button type="button" class="btn btn-warning btn-lg btn-block" onclick="if (confirm('Are you sure?')) resetScores()">Reset&nbsp;scores</button>
        
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<!-- JS for the game -->
<script src="game.js"></script>
</body>
</html
