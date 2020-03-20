<p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# base64-to-path

Use this action if you need to write a base64-encoded string to a path. This can be used for certificate signing when key is kept as a base64 GitHub Secret.

## Usage
```
- name: Some name
  uses: RollyPeres/base64-to-path@v1
  with:
    filePath: ${{ github.workspace }}/somefile.someextension
    encodedString: ${{ secrets.SOME_GITHUB_SECRET }}
```
