import Twitter from 'twitter';

export default function main() {
  const status = process.argv[2]
  const consumerKey = process.env.BBN_TT_CONSUMER_KEY;
  const consumerSecret = process.env.BBN_TT_CONSUMER_SECRET;
  const accessTokenKey = process.env.BBN_TT_ACCESS_TOKEN;
  const accessTokenSecret = process.env.BBN_TT_ACCESS_TOKEN_SECRET;

  if (typeof consumerKey === 'undefined')
    throw new Error('BBN_TT_CONSUMER_KEY is not defined');
  if (typeof consumerSecret === 'undefined')
    throw new Error('BBN_TT_CONSUMER_SECRET is not defined');
  if (typeof accessTokenKey === 'undefined')
    throw new Error('BBN_TT_ACCESS_TOKEN is not defined');
  if (typeof accessTokenSecret === 'undefined')
    throw new Error('BBN_TT_ACCESS_TOKEN_SECRET is not defined');

  if (!status) throw new Error('bbn-tt <status>');

  const twitter = new Twitter({
    consumer_key: consumerKey,
    consumer_secret: consumerSecret,
    access_token_key: accessTokenKey,
    access_token_secret: accessTokenSecret
  });

  twitter.post('statuses/update', { status }, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      const { user, id_str, text } = result;
      const url = `https://twitter.com/${user.name}/status/${id_str}`;
      const message = `${text}\n${url}`;
      console.log(message);
    }
  });
}
