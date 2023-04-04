if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_READY = "onReady";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$4 = {};
  function _sfc_render$1(_ctx, _cache) {
    return null;
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1], ["__file", "E:/HBuilderXProjects/CloudClass/components/uni-status-bar/uni-status-bar.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props) {
      const courses = vue.reactive([
        {
          courseId: 1,
          courseName: "后端工程开发",
          courseClass: "软件2242 Web2班",
          courseNo: "2942577",
          courseCover: "static/images/SpringBoot.png",
          semester: "2022-2-23-2",
          finished: false,
          show: false
        },
        {
          courseId: 2,
          courseName: "前端工程开发",
          courseClass: "软件2242 Web2班",
          courseNo: "9488275",
          courseCover: "static/images/Vue.png",
          semester: "2022-2-23-2",
          finished: false,
          show: false
        },
        {
          courseId: 3,
          courseName: "Web工程开发",
          courseClass: "软件2242 Web2班",
          courseNo: "8175074",
          courseCover: "static/images/Web.png",
          semester: "2022-2-23-2",
          finished: false,
          show: false
        },
        {
          courseId: 4,
          courseName: "Java程序设计",
          courseClass: "软件2242 Web2班",
          courseNo: "2942577",
          courseCover: "static/images/Java.jpg",
          semester: "2022-2-23-2",
          finished: false,
          show: false
        }
      ]);
      let navBarHeight = vue.ref(Number);
      let screenWidth = vue.ref(Number);
      vue.ref(Number);
      onReady(() => {
        formatAppLog("log", "at pages/index/index.vue:188", "APP 页面初始化");
        screenWidth = uni.getSystemInfoSync().screenWidth;
        formatAppLog("log", "at pages/index/index.vue:190", "屏幕宽度" + screenWidth);
        let info = uni.createSelectorQuery().select("#nav-bar");
        info.boundingClientRect((data) => {
          formatAppLog("log", "at pages/index/index.vue:194", "导航高度" + data.height);
          navBarHeight = data.height + 40;
        }).exec();
      });
      return (_ctx, _cache) => {
        const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createCommentVNode(" 自定义状态栏 "),
          vue.createVNode(_component_uni_status_bar),
          vue.createCommentVNode(" 条件编译-导航栏 "),
          vue.createElementVNode(
            "view",
            {
              class: "f-between pb-1 bg-light",
              id: "nav-bar",
              style: vue.normalizeStyle({ width: vue.unref(screenWidth) + "px", height: vue.unref(navBarHeight) + "px" })
            },
            [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", { class: "text-info font-weight-bold ml-1 label" }, "我创建的"),
                vue.createElementVNode("text", { class: "text-dark font-weight-bold mx-2" }, "我加入的"),
                vue.createElementVNode("text", { class: "text-dark font-weight-bold" }, "我共建的")
              ]),
              vue.createElementVNode("view", { class: "text-info" }, [
                vue.createElementVNode("text", { class: "iconfont-lg icon-add" }),
                vue.createElementVNode("text", { class: "iconfont-lg icon-scan mx-2" })
              ])
            ],
            4
            /* STYLE */
          ),
          vue.createCommentVNode(" 搜索框 "),
          vue.createElementVNode("view", { class: "flex my-2 px-2" }, [
            vue.createElementVNode("view", { class: "position-relative border flex-5" }, [
              vue.createElementVNode("view", { class: "search-icon text-light-muted mt-1 ml-1" }, [
                vue.createElementVNode("text", { class: "iconfont icon-search" })
              ]),
              vue.createElementVNode("input", {
                type: "text",
                placeholder: "搜索",
                class: "font-md search-box flex-1"
              })
            ]),
            vue.createElementVNode("text", { class: "flex-1 text-info font-weight-bold f-center" }, "调序")
          ]),
          vue.createCommentVNode(" 底部导航栏 "),
          vue.createElementVNode("view", { class: "navbar" }, [
            vue.createElementVNode("view", { class: "navbar-item" }, [
              vue.createElementVNode("image", {
                src: "/static/tabbar/index-selected.png",
                class: "nav-icon"
              }),
              vue.createElementVNode("view", { class: "name text-info" }, "班课")
            ]),
            vue.createElementVNode("view", { class: "navbar-item" }, [
              vue.createElementVNode("image", {
                src: "/static/tabbar/find.png",
                class: "nav-icon"
              }),
              vue.createElementVNode("view", { class: "name text-muted" }, "发现")
            ]),
            vue.createElementVNode("view", { class: "navbar-item" }, [
              vue.createElementVNode("image", {
                src: "/static/tabbar/my.png",
                class: "nav-icon"
              }),
              vue.createElementVNode("view", { class: "name text-muted" }, "我的")
            ])
          ]),
          vue.createCommentVNode(" 主体部分 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(courses, (course, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: course.courseId,
                index,
                class: "border-bottom bg-white mb-2"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "text-dark h4 font-weight-bold p-2" },
                  vue.toDisplayString(course.courseName),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "flex px-2" }, [
                  vue.createElementVNode("view", { class: "flex-1" }, [
                    vue.createElementVNode("image", {
                      src: course.courseCover,
                      class: "thumbnail"
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "flex-4 ml-2" }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(course.courseClass),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "mt-1 font-sm" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "text-muted mr-2" },
                        vue.toDisplayString(course.semester),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "text-info" },
                        vue.toDisplayString(course.courseNo),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "flex-1 text-right" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-right text-muted" })
                  ])
                ]),
                vue.createElementVNode("view", { class: "p-2 f-around" }, [
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("view", { class: "iconfont icon-selected" }),
                    vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "签到")
                  ]),
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("view", { class: "iconfont icon-pepole" }),
                    vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "课堂")
                  ]),
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("view", { class: "iconfont icon-fillin" }),
                    vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "课件")
                  ]),
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("view", { class: "iconfont icon-gift" }),
                    vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "活动")
                  ]),
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("view", { class: "iconfont icon-voice text-info" }),
                    vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "语音")
                  ])
                ])
              ], 8, ["index"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode("view", { class: "my-5" }, '""')
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/HBuilderXProjects/CloudClass/pages/index/index.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render(_ctx, _cache) {
    return null;
  }
  const PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__file", "E:/HBuilderXProjects/CloudClass/pages/find/find.vue"]]);
  const _sfc_main$1 = {
    __name: "my",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "me bg-white flex" }, [
            vue.createElementVNode("image", {
              src: "/static/me.jpg",
              class: "p-me ml-2 my-2"
            }),
            vue.createElementVNode("text", { class: "flex-4 ml-2 mt-5" }, "AAA建材王哥"),
            vue.createElementVNode("view", { class: "text-right mt-5" }, [
              vue.createElementVNode("text", { class: "iconfont icon-right text-muted mr-2" })
            ])
          ]),
          vue.createElementVNode("view", { class: "flex bg-white" }, [
            vue.createElementVNode("view", {
              class: "border-item",
              style: { "border-left": "0", "border-right": "1rpx" }
            }, [
              vue.createElementVNode("view", { class: "text-info mt-2" }, "20"),
              vue.createElementVNode("view", { class: "text-muted" }, "经验值")
            ]),
            vue.createElementVNode("view", { class: "border-item" }, [
              vue.createElementVNode("view", { class: "text-info mt-2" }, "999"),
              vue.createElementVNode("view", { class: "text-muted" }, "魅力值")
            ]),
            vue.createElementVNode("view", { class: "border-item" }, [
              vue.createElementVNode("view", { class: "text-info mt-2" }, "6"),
              vue.createElementVNode("view", { class: "text-muted" }, "蓝豆")
            ]),
            vue.createElementVNode("view", { class: "border-item" }, [
              vue.createElementVNode("view", { class: "text-info mt-2" }, "0"),
              vue.createElementVNode("view", { class: "text-muted" }, "心意")
            ])
          ]),
          vue.createElementVNode("view", { class: "mt-4 bg-white f-around border-bottom border-top" }, [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("image", {
                src: "/static/my/kongjian.png",
                class: "ml-3 mt-1 large"
              }),
              vue.createElementVNode("view", { class: "mt-1" }, "我的空间")
            ]),
            vue.createElementVNode("view", null, [
              vue.createElementVNode("image", {
                src: "/static/my/shoucang.png",
                class: "ml-3 mt-1 large"
              }),
              vue.createElementVNode("view", { class: "mt-1" }, "我的收藏")
            ]),
            vue.createElementVNode("view", null, [
              vue.createElementVNode("image", {
                src: "/static/my/liwu.png",
                class: "ml-3 mt-1 large"
              }),
              vue.createElementVNode("view", { class: "mt-1" }, "心意卡片")
            ]),
            vue.createElementVNode("view", null, [
              vue.createElementVNode("image", {
                src: "/static/my/renwu.png",
                class: "ml-3 mt-1 large"
              }),
              vue.createElementVNode("view", { class: "mt-1" }, "任务中心")
            ]),
            vue.createElementVNode("view", null, [
              vue.createElementVNode("image", {
                src: "/static/my/xiaoxi.png",
                class: "ml-3 mt-1 large"
              }),
              vue.createElementVNode("view", { class: "mt-1" }, "系统消息")
            ])
          ]),
          vue.createElementVNode("view", { class: "mt-4 bg-white border-bottom border-top flex" }, [
            vue.createElementVNode("view", { class: "ml-3 my-3" }, " 我的勋章 "),
            vue.createElementVNode("view", { class: "text-muted flex-4 text-right mt-3" }, [
              vue.createElementVNode("text", { class: "text-muted" }, "快来获得第一枚勋章"),
              vue.createElementVNode("text", { class: "iconfont icon-right mr-2 mt-3 flex-1" })
            ])
          ]),
          vue.createElementVNode("view", { class: "mt-4 bg-white border-top flex" }, [
            vue.createElementVNode("view", { class: "ml-3 my-3" }, " 文件暂存区 "),
            vue.createElementVNode("view", { class: "text-muted text-right flex-4" }, [
              vue.createElementVNode("view", { class: "iconfont icon-right mr-2 mt-3" })
            ])
          ]),
          vue.createElementVNode("view", { class: "bg-white border-top flex" }, [
            vue.createElementVNode("view", { class: "ml-3 my-3" }, " 分享给朋友 "),
            vue.createElementVNode("view", { class: "text-muted flex-4 text-right mt-3" }, [
              vue.createElementVNode("text", { class: "text-muted" }, "累计分享成功0次"),
              vue.createElementVNode("text", { class: "iconfont icon-right mr-2 mt-3 flex-1" })
            ])
          ]),
          vue.createElementVNode("view", { class: "bg-white border-top flex" }, [
            vue.createElementVNode("view", { class: "ml-3 my-3" }, " 用户协议 "),
            vue.createElementVNode("view", { class: "text-muted text-right flex-4" }, [
              vue.createElementVNode("view", { class: "iconfont icon-right mr-2 mt-3" })
            ])
          ]),
          vue.createElementVNode("view", { class: "bg-white border-top flex" }, [
            vue.createElementVNode("view", { class: "ml-3 my-3" }, " 隐私政策 "),
            vue.createElementVNode("view", { class: "text-muted text-right flex-4" }, [
              vue.createElementVNode("view", { class: "iconfont icon-right mr-2 mt-3" })
            ])
          ]),
          vue.createElementVNode("view", { class: "bg-white border-top border-bottom flex" }, [
            vue.createElementVNode("view", { class: "ml-3 my-3" }, " 设置 "),
            vue.createElementVNode("view", { class: "text-muted text-right flex-4" }, [
              vue.createElementVNode("view", { class: "iconfont icon-right mr-2 mt-3" })
            ])
          ]),
          vue.createCommentVNode(" 底部导航栏 "),
          vue.createElementVNode("view", { class: "navbar" }, [
            vue.createElementVNode("view", { class: "navbar-item" }, [
              vue.createElementVNode("image", {
                src: "/static/tabbar/index.png",
                class: "nav-icon"
              }),
              vue.createElementVNode("view", { class: "name text-muted" }, "班课")
            ]),
            vue.createElementVNode("view", { class: "navbar-item" }, [
              vue.createElementVNode("image", {
                src: "/static/tabbar/find.png",
                class: "nav-icon"
              }),
              vue.createElementVNode("view", { class: "name text-muted" }, "发现")
            ]),
            vue.createElementVNode("view", { class: "navbar-item" }, [
              vue.createElementVNode("image", {
                src: "/static/tabbar/my-selected.png",
                class: "nav-icon"
              }),
              vue.createElementVNode("view", { class: "name text-info" }, "我的")
            ])
          ])
        ]);
      };
    }
  };
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2f1ef635"], ["__file", "E:/HBuilderXProjects/CloudClass/pages/my/my.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/find/find", PagesFindFind);
  __definePage("pages/my/my", PagesMyMy);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/HBuilderXProjects/CloudClass/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
