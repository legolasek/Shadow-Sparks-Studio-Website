<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shadow Sparks Studio</title>
    <link rel="stylesheet" href="<?= CSS_PATH ?>">
</head>

<body>

    <header>
        <div class="logo">
            <img src="<?= IMG_PATH ?>logo.png" alt="Shadow Sparks Studio">
        </div>
        <div class="language-selector">
            <form action="change_language.php" method="post">
                <button type="submit" name="lang" value="pl">
                    <img src="flag_pl.png" alt="Polish Flag">
                </button>
            </form>
            <form action="change_language.php" method="post">
                <button type="submit" name="lang" value="en">
                    <img src="flag_en.png" alt="English Flag">
                </button>
            </form>
        </div>
    </header>