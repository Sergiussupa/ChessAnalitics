# ChessAnalitics
<h1> The aim is to use the modified Monte Carlo Tree Search Method to identify errors in a chess player's opening repertoire. </h1>
<a href="https://habr.com/ru/articles/282522/"> More about the method</a>
<hr>
<h2>Plan<h2>
<ol>
  <li>Parsing our player's games at lichess.org</li>
  <li>Analysis of statistics</li>
  <li>Search for debut errors based on collected statistics</li>
</ol>

  <h2>Current status of the project</h2>
<p>The FEN decoder has been created. FEN is one way of storing the state of a checkerboard. The Lichess website stores the games in it.</p>
  <p>As we can see our decoder works correctly. Displaying the state of the chess game correctly.</p>
<h3>Example 1</h3>
<p>FEN 1 = 'rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N3P1/PPP2PBP/R1BQK2R'</p>
<img src="https://github.com/Sergiussupa/ChessAnalitics/blob/main/FEN1.jpeg?raw=true">
<img src="https://github.com/Sergiussupa/ChessAnalitics/blob/Sergiussupa-patch-1/FENLichess1.jpeg?raw=true">

<h3>Example 2</h3>
<p>FEN 2 = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'<p>
<img src="https://github.com/Sergiussupa/ChessAnalitics/blob/Sergiussupa-patch-1/FEN2.jpeg?raw=true">
<img src="https://github.com/Sergiussupa/ChessAnalitics/blob/Sergiussupa-patch-1/FENLichess2.jpeg?raw=true">
