class GitHub {
  constructor() {
    //Application keys from github register application

    this.client_id = "450a380b170c58d74f13";
    this.client_secret = "a982211a80795e72f53a925f24d095709168396a";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      //in es6+ if we write only one time profile like in this condition the result is same as profile:profile
      profile: profile,
      repos: repos,
    };
  }
}
