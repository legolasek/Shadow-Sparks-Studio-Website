<?php
// Ustawienie stałych dla ścieżek
define('CSS_PATH', 'style.css');
define('IMG_PATH', 'img/');

// Początek strony HTML
include 'header.php';

session_start();

// Sprawdzamy, czy użytkownik wybrał język. Jeśli nie, ustawiamy domyślny język na "en".
if (!isset($_SESSION['lang'])) {
    $_SESSION['lang'] = 'en';
}

// Pobieramy aktualnie wybrany język
$lang = $_SESSION['lang'];

// Importujemy plik z tłumaczeniami
include_once 'languages.php';

// Funkcja do tłumaczenia tekstu na wybrany język
function translate($key) {
    global $languages, $lang;
    return $languages[$lang][$key];
}
?>


<main>
    <div id="about" class="section">
    <div class="content">
    <h2><?php echo translate('about_us'); ?></h2>
            <div class="item">
                <?php include 'about.php'; ?>
            </div>
        </div>
</div>

    <div id="team" class="section">
        <div class="content">
        <h2><?php echo translate('team'); ?></h2>
            <div class="item">
                <?php include 'team.php'; ?>
            </div>
        </div>
    </div>

    <div id="portfolio" class="section">
        <div class="content">
        <h2><?php echo translate('games'); ?></h2>
            <div class="item">
                <?php include 'games.php'; ?>
            </div>
        </div>
    </div>
</main>

<?php
// Koniec strony HTML
include 'footer.php';
?>
