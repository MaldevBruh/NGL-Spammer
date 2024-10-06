const axios = require('axios');
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = (query) => new Promise(resolve => rl.question(query, resolve));

(async () => {
  const username = await input('Enter NGL Username: ');
  const question = await input('Enter the question/message: ');
  let spamAmount;
  do {
    spamAmount = await input('Input the spam amount: ');
    spamAmount = Number(spamAmount);
    if (isNaN(spamAmount) || spamAmount <= 0) {
      console.log('Spam Amount must be a number greater than 0');
    }
  } while (isNaN(spamAmount) || spamAmount <= 0);

  const url = 'https://ngl.link/api/submit';

  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('question', question);
  formData.append('deviceId', crypto.randomUUID());
  formData.append('gameSlug', '');
  formData.append('referrer', '');

  const headers = {
    'Authority': 'ngl.link',
    'Accept': '/',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://ngl.link',
    'Referer': 'https://ngl.link/' + username,
    'X-Requested-With': 'XMLHttpRequest'
  }

  let count = 0;
  while (count < spamAmount) {
    try {
      const { data } = await axios.post(url, formData, { headers });
      count++;
      console.log({
        status: true,
        amount: count,
        username,
        question,
        data
      });
    } catch (e) {
      if (e.response && e.response.status === 429) {
        console.error('Rate limit exceeded. Waiting before retrying...');
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        console.error('Error:', e.message);
        break;
      }
    }
  }
  rl.close();
})();