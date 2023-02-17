
import '../scc/heder.css';
import '../scc/touroku.css';


function App() {
  return (
<div >
    <header class="header">
      <div class="header__inner">
          <h1 class="header__title header-title">
            <a href="#">
              E-gate
            </a>
          </h1>
      </div>

      <div class="hamburger-menu">
          
          <input type="checkbox" id="menu-btn-check"></input>
          <label for="menu-btn-check" class="menu-btn"><span></span></label>
          {/* ここからメニュー */}
          <div class="menu-content">
            <ul>
            <li>
                <a href="/">ホーム</a>
              </li>
              <li>
                <a href="/2">登録</a>
              </li>
              <li>
                <a href="/3">出席</a>
              </li>
              <li>
                <a href="/4">出席確認</a>
              </li>
            </ul>
          </div>
      </div>
    </header>
      <main>
        <form class="aaa" action="" method="POST" enctype="multipart/form-data">
          <p><h1>登録</h1></p>
          <div class="upload-area">
              <i class="fas fa-cloud-upload-alt"></i>
              <p>Drag and drop a file or click</p>
              <input type="file" name="upload_file[]" id="input-files" multiple></input>
          </div>
          <input type="submit" id="submit-btn" value="送信"></input>
      </form>
      </main>
    <footer class="footer">
      <div>
        フッターエリア
      </div>
    </footer>
  </div>
  );
}

// document.puerySelector('input').addEventListener('change', (evt) =>{
//   console.log(evt.target.files[0]);
// });

export default App;
