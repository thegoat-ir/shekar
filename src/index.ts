import { createDbWorker } from "sql.js-httpvfs";

const workerUrl = new URL(
  "sql.js-httpvfs/dist/sqlite.worker.js",
  import.meta.url
);
const wasmUrl = new URL("sql.js-httpvfs/dist/sql-wasm.wasm", import.meta.url);

function getParameterByName(name: string, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function validateUsername(value: any) {
  if (value) {
    if (isNaN(value)) {
      if (
        !/^(?=.{5,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9_]+(?<![_.])$/.test(value)
      ) {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
  return true;
}

async function load() {
  const worker = await createDbWorker(
    [
      {
        from: "inline",
        config: {
          serverMode: "full",
          url: "/usernames.db",
          requestChunkSize: 4096,
        },
      },
    ],
    workerUrl.toString(),
    wasmUrl.toString()
  );
  var username = getParameterByName("username");
  if (username != null) {
    if (validateUsername(username)) {
      document.getElementById("app")!.innerHTML = "<h2>Loading...</h2>";
      const result = await worker.db.query(
        `select username from usernames where username = '${username}' limit 1;`
      );
      if (Array.isArray(result) && result.length) {
        if (result[0].username == username) {
          document.getElementById(
            "app"
          )!.innerHTML = `<h2>Oops, @${username} was compromised!</h2>`;
        }
      } else {
        document.getElementById(
          "app"
        )!.innerHTML = `<h2>Yay!, @${username} was not compromised!</h2>`;
      }
    } else {
      document.getElementById("app")!.innerHTML = `<h2>Invalid Username!</h2>`;
    }
  }
}

load();
