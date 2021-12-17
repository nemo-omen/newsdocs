<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use PhpImap\Exceptions\ConnectionException;
use PhpImap\Mailbox;

$mailbox = new PhpImap\Mailbox(
  '{imap.dreamhost.com:465/imap/ssl}INBOX',
  env('MAIL_USERNAME'),
  env('MAIL_PASSWORD'),
);

class JaillogController extends Controller {

}