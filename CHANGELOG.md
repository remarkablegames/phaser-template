# Changelog

## 1.0.0 (2022-07-11)


### ⚠ BREAKING CHANGES

* refactor project from phaser version 2 to 3

### Features

* **assets:** add dude, platform, sky, and star png images ([30770fb](https://www.github.com/remarkablegames/phaser-template/commit/30770fbce87ad358007061bcad9114ac26f11367))
* center the parent container horizontally and vertically ([471b4ba](https://www.github.com/remarkablegames/phaser-template/commit/471b4ba2b9fba136779e7d392b6a51bc5d3b8b84))
* **game:** scale the canvas depending on window size ([7c0a109](https://www.github.com/remarkablegames/phaser-template/commit/7c0a109f13888361ae60e6d3069d80edf35c667f))
* **index:** add media query to hide .github-corners when <992px ([be71945](https://www.github.com/remarkablegames/phaser-template/commit/be719453d21bdcfba907961ed58ce2080d932f2b))
* **index:** add resize listener so game scales responsively ([fd23f98](https://www.github.com/remarkablegames/phaser-template/commit/fd23f98f082e293a86064f475367c086e6012ac0))
* **index:** add title, url, and version to game config ([35820d0](https://www.github.com/remarkablegames/phaser-template/commit/35820d0542591289f850af947a0b852997aefefe))
* **index:** always show GitHub Corners ([6262181](https://www.github.com/remarkablegames/phaser-template/commit/6262181d48b36dadc704d62b9c2cf53196be4523))
* **index:** center the game canvas using the Scale Manager ([8e82f5e](https://www.github.com/remarkablegames/phaser-template/commit/8e82f5e960e99f7fed097c6a4744ebab9aec891b))
* **index:** comment out ServiceWorker ([fea4668](https://www.github.com/remarkablegames/phaser-template/commit/fea4668b5c2fec0a7ddb945f644c6ef6efdfee9a))
* **index:** disable context menu from appearing if you right-click ([9551dbb](https://www.github.com/remarkablegames/phaser-template/commit/9551dbbf442261adcccca2942cb5cee3eeb970f1))
* **index:** set backgroundColor to black and text color to white ([c3e6fa6](https://www.github.com/remarkablegames/phaser-template/commit/c3e6fa6cf4363d765866535e96054d225e6b5330))
* **public:** add favicon.ico, update index.html & manifest.json ([3a99799](https://www.github.com/remarkablegames/phaser-template/commit/3a9979921229884350188298fb847b6ae79bc42c))
* **public:** add GitHub Corners embed script to `index.html` ([a1cd587](https://www.github.com/remarkablegames/phaser-template/commit/a1cd58760a040f385f28cd86ba7e0ba5600e7989))
* **public:** do not load github-corners script on desktop <992px ([eb123ab](https://www.github.com/remarkablegames/phaser-template/commit/eb123ababf2aef4b0a938f69002c95bccd96796c))
* **scripts:** add `deploy.sh` and update npm script `deploy` ([8c71d2d](https://www.github.com/remarkablegames/phaser-template/commit/8c71d2dae37fda17bb868ba5b2fdcc404927ddda))
* **shared:** create shared module with an empty groups object ([8cba378](https://www.github.com/remarkablegames/phaser-template/commit/8cba3787c12a7f74c904ec5e6357742b2518080f))
* **shared:** expose empty objects `data` and `texts` ([ae943ae](https://www.github.com/remarkablegames/phaser-template/commit/ae943ae93fcc6fa43de2226e961daf53f9e41539))
* **shared:** expose empty sprites object ([f6a81aa](https://www.github.com/remarkablegames/phaser-template/commit/f6a81aafeb9953d49ec874fa47ec7052efb9516d))
* **sprites:** add sprite Sky to existing game when instantiated ([117f0db](https://www.github.com/remarkablegames/phaser-template/commit/117f0db9e7e0e868d0e200f9146ed8065a561a6a))
* **sprites:** collide Dude with platforms group during update ([d040b92](https://www.github.com/remarkablegames/phaser-template/commit/d040b92aafda3b5011fc310535884161aaf8a330))
* **sprites:** control the Dude with the keyboard (cursor keys) ([63f87e9](https://www.github.com/remarkablegames/phaser-template/commit/63f87e9c1dee4db8f4d4de810869df76feb597a9))
* **sprites:** create sprites Dude, Ground, Sky, and Star ([f76973d](https://www.github.com/remarkablegames/phaser-template/commit/f76973d196597caa4e4d3a30192d4bfea9d5b3ae))
* **sprites:** give Dude physics properties and animations ([d727dda](https://www.github.com/remarkablegames/phaser-template/commit/d727dda02e01e4cb2b9a434ad6a6d8d3b76b7cf1))
* **sprites:** increment score and update text when Star is removed ([d6a79b8](https://www.github.com/remarkablegames/phaser-template/commit/d6a79b875fb5e5a8051ad9802ffca96be043a045))
* **sprites:** update physics for Ground sprite ([56a7db4](https://www.github.com/remarkablegames/phaser-template/commit/56a7db47f839cb74541ccfc0c16137ac6d72ca37))
* **sprites:** update Star with physics and checks in update loop ([e2bae9d](https://www.github.com/remarkablegames/phaser-template/commit/e2bae9d73594293d9c5d8fec39d64a6ebe5e3e6b))
* **state:** build up Main scene by adding background and platforms ([b5238b4](https://www.github.com/remarkablegames/phaser-template/commit/b5238b444a3575b331fb923a39ded6b90fa6cca5))
* **states:** add Dude sprite to Main state ([f8aeb7f](https://www.github.com/remarkablegames/phaser-template/commit/f8aeb7fa5a45ea5e18bcce00230d4e5cfe51c688))
* **states:** add Score text in Main state ([1185de5](https://www.github.com/remarkablegames/phaser-template/commit/1185de53bc4d1b562bd43b5ea0be3b3a35eb1c9b))
* **states:** add Star sprites in Main state ([ec90754](https://www.github.com/remarkablegames/phaser-template/commit/ec90754a91576ab146c63caad7d5c23f2242bbac))
* **states:** create and start game with Boot state ([b1228bf](https://www.github.com/remarkablegames/phaser-template/commit/b1228bf3eccf4e994df7c463f6f9da3b5a32b468))
* **states:** create Load state that preloads assets ([e5fc606](https://www.github.com/remarkablegames/phaser-template/commit/e5fc606241f7b543b2d74cf999a096e4cc68fb45))
* **states:** create Main state and add Star sprite to game ([8a0f76e](https://www.github.com/remarkablegames/phaser-template/commit/8a0f76e907f8d8865a8c20ec0bfd4111762a941b))
* **states:** set scale mode to show entire game given proportions ([5ed51a7](https://www.github.com/remarkablegames/phaser-template/commit/5ed51a767604d5ff8bc6874580bd8382235d5054))
* **texts:** add Score text ([4249ef1](https://www.github.com/remarkablegames/phaser-template/commit/4249ef1bff72f462927e917819171df1b1198a69))
* update project with latest `web-app-template` ([4f8a556](https://www.github.com/remarkablegames/phaser-template/commit/4f8a556cc8055fc60312fe71e70b195c6c9c8a54))
* update template given cra-template@1.1.1 ([a6ff156](https://www.github.com/remarkablegames/phaser-template/commit/a6ff15646c07c30ed8aba56510a4b1ae31f944e0))


### Bug Fixes

* move body logic from Star sprite to Main scene so stars bounce ([421bee0](https://www.github.com/remarkablegames/phaser-template/commit/421bee04c6589567b838313903a4bb48ced8505e))
* **package:** add back homepage since build will fail without subdir ([f417f94](https://www.github.com/remarkablegames/phaser-template/commit/f417f94d3908f395136bc6827acd2d27eb27af9a))
* **scenes:** scale the text properly with fontSize in Main ([594bc77](https://www.github.com/remarkablegames/phaser-template/commit/594bc77bb8f0cca943b1f069dfb23344e6ff2049))
* upgrade web-scripts@2.1.2 and update env vars ([321f6d1](https://www.github.com/remarkablegames/phaser-template/commit/321f6d17b9fc00bbc68314611f7eafb44f83e118))


### Code Refactoring

* upgrade phaser to 3.15.1 ([25ba58c](https://www.github.com/remarkablegames/phaser-template/commit/25ba58c8159be08782303c480c9e20cb973786e6))
