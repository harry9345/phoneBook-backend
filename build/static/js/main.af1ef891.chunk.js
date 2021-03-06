(this['webpackJsonpphone-book'] = this['webpackJsonpphone-book'] || []).push([
  [0],
  {
    23: function (t, n, e) {},
    43: function (t, n, e) {
      'use strict';
      e.r(n);
      var c = e(2),
        i = e.n(c),
        o = e(18),
        r = e.n(o),
        a = (e(23), e(8)),
        u = e(3),
        s = (e(9), e(0)),
        l = function (t) {
          var n = t.note,
            e = t.toggleImportance,
            c = n.important ? 'make not important' : 'make important';
          return Object(s.jsxs)('li', {
            className: 'note',
            children: [
              n.content,
              Object(s.jsx)('button', { onClick: e, children: c }),
            ],
          });
        };
      function j(t) {
        var n = t.message;
        return null === n
          ? null
          : Object(s.jsx)('div', { className: 'error', children: n });
      }
      var d = e(6),
        b = e.n(d),
        f = '/app/notes',
        p = function () {
          return b.a.get(f).then(function (t) {
            return t.data;
          });
        },
        h = function (t) {
          return b.a.post(f, t).then(function (t) {
            return t.data;
          });
        },
        m = function (t, n) {
          return b.a.put(''.concat(f, '/').concat(t), n).then(function (t) {
            return t.data;
          });
        },
        O = function () {
          return Object(s.jsxs)('div', {
            style: { color: 'green', fontStyle: 'italic', fontSize: 16 },
            children: [
              ' ',
              Object(s.jsx)('br', {}),
              Object(s.jsx)('em', {
                children:
                  'Note app, Department of Computer Science, University of Helsinki 2021',
              }),
            ],
          });
        },
        x = function (t) {
          var n = Object(c.useState)(t.notes),
            e = Object(u.a)(n, 2),
            i = e[0],
            o = e[1],
            r = Object(c.useState)('Add new note'),
            d = Object(u.a)(r, 2),
            b = d[0],
            f = d[1],
            x = Object(c.useState)(!0),
            v = Object(u.a)(x, 2),
            S = v[0],
            g = v[1],
            T = Object(c.useState)('someERROR HAPPEND'),
            k = Object(u.a)(T, 2),
            E = k[0],
            y = k[1],
            I = [
              { title: 'Starter', plan: 'TIER_0' },
              { title: void 0, plan: 'TIER_1A' },
              { title: 'Classic', plan: 'TIER_2A' },
              { title: 'Premium', plan: 'TIER_3A' },
            ];
          S ||
            i.filter(function (t) {
              return !0 === t.important;
            });
          Object(c.useEffect)(function () {
            p().then(function (t) {
              o(t);
            });
          }, []);
          return Object(s.jsxs)('div', {
            children: [
              Object(s.jsx)('h1', { children: 'Notes' }),
              Object(s.jsx)(j, { message: E }),
              Object(s.jsx)('div', {
                children: Object(s.jsxs)('button', {
                  onClick: function () {
                    return g(!S);
                  },
                  children: ['show ', S ? 'important' : 'all'],
                }),
              }),
              Object(s.jsx)('ul', {
                children: i.map(function (t) {
                  return Object(s.jsx)(
                    l,
                    {
                      note: t,
                      toggelingImportant: function () {
                        return (function (t) {
                          var n = i.find(function (n) {
                              return n.id === t;
                            }),
                            e = Object(a.a)(
                              Object(a.a)({}, n),
                              {},
                              { important: !n.important }
                            );
                          m(t, e)
                            .then(function (n) {
                              o(
                                i.map(function (e) {
                                  return e.id !== t ? e : n;
                                })
                              );
                            })
                            .catch(function (e) {
                              y(
                                'the '.concat(n.content, ' has already deleted')
                              ),
                                setTimeout(function () {
                                  y(null);
                                }, 5e3),
                                o(
                                  i.filter(function (n) {
                                    return n.id !== t;
                                  })
                                );
                            });
                        })(t.id);
                      },
                    },
                    t.id
                  );
                }),
              }),
              Object(s.jsx)('ul', {
                children: I.map(function (t, n) {
                  return (
                    t.title,
                    Object(s.jsx)(
                      'li',
                      {
                        className: 'hichi',
                        children: Object(s.jsx)('span', {
                          className: 'hichi',
                          children: t.title,
                        }),
                      },
                      n
                    )
                  );
                }),
              }),
              Object(s.jsxs)('form', {
                onSubmit: function (t) {
                  t.preventDefault();
                  var n = {
                    content: b,
                    date: new Date().toISOString(),
                    important: Math.random() < 0.5,
                  };
                  h(n).then(function (t) {
                    o(i.concat(t)), f(' ');
                  });
                },
                children: [
                  Object(s.jsx)('input', {
                    value: b,
                    onChange: function (t) {
                      return f(t.target.value);
                    },
                  }),
                  Object(s.jsx)('button', { type: 'submit', children: 'ADD' }),
                ],
              }),
              Object(s.jsx)(O, {}),
            ],
          });
        };
      r.a.render(
        Object(s.jsx)(i.a.StrictMode, {
          children: Object(s.jsx)(x, {
            notes: [
              {
                id: 1,
                content: 'HTML is easy',
                date: '2019-05-30T17:30:31.098Z',
                important: !0,
              },
              {
                id: 2,
                content: 'Browser can execute only JavaScript',
                date: '2019-05-30T18:39:34.091Z',
                important: !1,
              },
              {
                id: 3,
                content:
                  'GET and POST are the most important methods of HTTP protocol',
                date: '2019-05-30T19:20:14.298Z',
                important: !0,
              },
            ],
          }),
        }),
        document.getElementById('root')
      );
    },
    9: function (t, n, e) {},
  },
  [[43, 1, 2]],
]);
//# sourceMappingURL=main.af1ef891.chunk.js.map
