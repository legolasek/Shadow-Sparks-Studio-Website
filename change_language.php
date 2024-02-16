<?php
session_start();

// Importujemy plik z tłumaczeniami
include_once 'languages.php';

// Sprawdzamy, czy żądanie POST zostało wysłane
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobieramy wybrany język z formularza
    $lang = $_POST['lang'];

    // Sprawdzamy, czy wybrany język istnieje w naszej tablicy tłumaczeń
    if (array_key_exists($lang, $languages)) {
        // Ustawiamy nowy język w zmiennej sesji
        $_SESSION['lang'] = $lang;
    } else {
        // Jeśli wybrany język nie istnieje, ustawiamy domyślny język na "en"
        $_SESSION['lang'] = 'en';
    }
}

// Przekierowujemy użytkownika z powrotem na poprzednią stronę
header("Location: " . $_SERVER["HTTP_REFERER"]);
exit();
?>