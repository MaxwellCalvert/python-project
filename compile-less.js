const less = require('less');
const fs = require('fs');

less.render(fs.readFileSync('styles.less', 'utf8')).then(output => {
  fs.writeFileSync('static/css/styles.css', output.css);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
