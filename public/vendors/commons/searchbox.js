(function (n) {
    function r(n, r, u) {
        function p(t) {
            var i = o,
                r = h;
            return (o = h = undefined), (c = t), (s = n.apply(r, i));
        }
        function g(n) {
            return (c = n), (f = setTimeout(v, r)), b ? p(n) : s;
        }
        function nt(n) {
            var i = n - e,
                u = n - c,
                t = r - i;
            return l ? nativeMin(t, a - u) : t;
        }
        function k(n) {
            var t = n - e,
                i = n - c;
            return e === undefined || t >= r || t < 0 || (l && i >= a);
        }
        function v() {
            var n = Date.now();
            if (k(n)) return d(n);
            f = setTimeout(v, nt(n));
        }
        function d(n) {
            return ((f = undefined), y && o) ? p(n) : ((o = h = undefined), s);
        }
        function tt() {
            f !== undefined && clearTimeout(f);
            c = 0;
            o = e = h = f = undefined;
        }
        function it() {
            return f === undefined ? s : d(Date.now());
        }
        function w() {
            var n = Date.now(),
                t = k(n);
            if (((o = arguments), (h = this), (e = n), t)) {
                if (f === undefined) return g(e);
                if (l) return clearTimeout(f), (f = setTimeout(v, r)), p(e);
            }
            return f === undefined && (f = setTimeout(v, r)), s;
        }
        var o,
            h,
            a,
            s,
            f,
            e,
            c = 0,
            b = !1,
            l = !1,
            y = !0;
        if (typeof n != "function") throw new TypeError(FUNC_ERROR_TEXT);
        return (
            (r = i(r) || 0),
            t(u) &&
                ((b = !!u.leading),
                (l = "maxWait" in u),
                (a = l ? nativeMax(i(u.maxWait) || 0, r) : a),
                (y = "trailing" in u ? !!u.trailing : y)),
            (w.cancel = tt),
            (w.flush = it),
            w
        );
    }
    function i(n) {
        var i, r;
        return typeof n == "number"
            ? n
            : isSymbol(n)
            ? NAN
            : (t(n) &&
                  ((i = typeof n.valueOf == "function" ? n.valueOf() : n),
                  (n = t(i) ? i + "" : i)),
              typeof n != "string")
            ? n === 0
                ? n
                : +n
            : ((n = n.replace(reTrim, "")),
              (r = reIsBinary.test(n)),
              r || reIsOctal.test(n)
                  ? freeParseInt(n.slice(2), r ? 2 : 8)
                  : reIsBadHex.test(n)
                  ? NAN
                  : +n);
    }
    function t(n) {
        var t = typeof n;
        return n !== null && (t === "object" || t === "function");
    }
    n._debounce = r;
})(window);
window.autocompleteServiceConsts ||
    (window.autocompleteServiceConsts = {
        LeftArrowKey: 37,
        UpArrowKey: 38,
        RightArrowKey: 39,
        DownArrowKey: 40,
        EscapeKey: 27,
        BackspaceKey: 8,
        EnterKey: 13,
        NumpadMinKey: 96,
        NumpadMaxKey: 105,
        TabKey: 9,
        Hide: "hide",
        Show: "show",
        AjaxDataType: "json",
        AjaxDefaultMethod: "GET",
        DataUrlAttr: "data-autocomplete-url",
        DataIdHolderAttr: "data-autocomplete-idholder",
        DataMethodAttr: "data-autocomplete-method",
        DataExtraParamsAttr: "data-autocomplete-extraparams",
        DataDependantIdParamAttr: "data-autocomplete-dependantidparam",
        DataSelectFirstOccurrenceAttr:
            "data-autocomplete-select-first-ocurrence",
        DataItemAddExtraHtmlAttr: "data-autocomplete-item-add-extra-html",
        DataIconDesignEnableAttr: "data-autocomplete-icondesign-enable",
        DataOpenOnClickAttr: "data-autocomplete-openonclick",
        DataAddClassesWhenOpeningAttr:
            "data-autocomplete-add-classes-when-opening",
        DataAddClassesWhenOpeningTargetAttr:
            "data-autocomplete-add-classes-when-opening-target",
        DataShowSummaryAttr: "data-autocomplete-show-summary",
        DataSummaryLatestSearchesLitAttr:
            "data-autocomplete-summary-latest-searches-lit",
        DataSummaryGenericPreviousLitAttr:
            "data-autocomplete-summary-previous-generic-lit",
        DataSummaryGenericLitAttr: "data-autocomplete-summary-generic-lit",
        DataRoundInputAttr: "data-autocomplete-round-input",
        ValAttr: "val",
        HrefAttr: "href",
        AutocompleteClass: "autocomplete",
        ActiveClass: "active",
        HighlightClass: "highlight",
        FocusableInputClass: "input_focus",
        PopupMinOffset: 0,
        PopupMaxOffset: 120,
        PopupContainerTag: "ul",
        PopupItemTag: "li",
        PopupItemHighlightTag: "span",
        PopupItemIconContainerTag: "span",
        PopupItemIconHrefTag: "a",
        PopupItemIconHrefTitleAndSubtitleContainerTag: "a",
        PopupItemIconTitleAndSubtitleContainerTag: "div",
        PopupItemIconTitleContainerTag: "div",
        PopupItemIconTitleHrefContainerTag: "div",
        PopupItemIconSubtitleContainerTag: "p",
        PopupItemIconSubtitleContainerClasses: "fc_aux_light fs13",
        PopupItemSummaryTitleClass: "title_suggest",
        PopupItemSummaryTitleLatestSearchesAttr: "data-ls-title",
        PopupItemSummaryTitleGenericAttr: "data-g-title",
        PopupItemSummaryLatestSearchesIconTag: "span",
        PopupItemSummaryLatestSearchesIconClass: "icon i_clock_g",
        PopupItemSummaryLatestSearchesTag: "a",
        PopupItemSummaryLatestSearchesDeleteContainerIconClass: "b_delete",
        PopupItemSummaryLatestSearchesDeleteIconClass: "icon i_delete",
        PopupItemSummaryLatestSearchesDeleteAttr: "data-ls-delete",
        PopupItemSelectableTextAttr: "data-autocomplete-item-selectable-text",
        PopupItemSelectableUrlAttr: "data-autocomplete-item-selectable-url",
        LatestSearchesStorageKey: "LatestSearchList",
        DebounceTimeout: 50,
        SummaryFirstTitleDataLengthToShow: 11,
    });
window.autocompleteService ||
    ((window.autocompleteService = {
        _c: autocompleteServiceConsts,
        _offset: 0,
        _showSummary: !1,
        _debounceEnable: !0,
        $Input: null,
        $HolderInput: null,
        _getCTP: function () {
            let n = $("meta[name=meta_ctp]").attr("content");
            return n || (n = 0), n;
        },
        _getApplyDebounce: function () {
            return this._debounceEnable && window._debounce;
        },
        _getHolderInput: function () {
            return $("#" + this.$Input.attr(this._c.DataIdHolderAttr));
        },
        _getDataUrlAttr: function () {
            return this.$Input.attr(this._c.DataUrlAttr);
        },
        _getDataMethodAttr: function () {
            return (
                this.$Input.attr(this._c.DataMethodAttr) ||
                this._c.AjaxDefaultMethod
            );
        },
        _getDataExtraParamsAttr: function () {
            return this.$Input.attr(this._c.DataExtraParamsAttr);
        },
        _getDataDependantIdAttr: function () {
            return this.$Input.attr(this._c.DataDependantIdParamAttr);
        },
        _getDataSelectFirstOccurrenceAttr: function () {
            return this.$Input.attr(this._c.DataSelectFirstOccurrenceAttr);
        },
        _getDataItemAddExtraHtmlAttr: function () {
            return this.$Input.attr(this._c.DataItemAddExtraHtmlAttr);
        },
        _getDataIconDesignEnableAttr: function () {
            return this.$Input.attr(this._c.DataIconDesignEnableAttr);
        },
        _getDataOpenOnClickAttr: function () {
            return this.$Input.attr(this._c.DataOpenOnClickAttr);
        },
        _getAddClassesWhenOpeningAttr: function () {
            return this.$Input.attr(this._c.DataAddClassesWhenOpeningAttr);
        },
        _getShowSummaryAttr: function () {
            return this.$Input.attr(this._c.DataShowSummaryAttr);
        },
        _getSummaryLatestSearchesLitAttr: function () {
            return this.$Input.attr(this._c.DataSummaryLatestSearchesLitAttr);
        },
        _getSummaryGenericPreviousLitAttr: function () {
            return this.$Input.attr(this._c.DataSummaryGenericPreviousLitAttr);
        },
        _getSummaryGenericLitAttr: function () {
            return this.$Input.attr(this._c.DataSummaryGenericLitAttr);
        },
        _getDataRoundInputAttr: function () {
            return this.$Input.attr(this._c.DataRoundInputAttr);
        },
        _getAjaxDataType: function () {
            return this._c.AjaxDataType;
        },
        _getPopup: function () {
            return this.$Input.next("." + this._c.AutocompleteClass);
        },
        _getFirstPopupItem: function () {
            return this._getPopup().children(this._c.PopupItemTag + ":first");
        },
        _getActiveItem: function () {
            return this.IsCurrentPopupOpen()
                ? this._getPopup().find("." + this._c.ActiveClass)
                : null;
        },
        _getLatestSearchesStorageKey: function () {
            return this._c.LatestSearchesStorageKey + this._getCTP();
        },
        _getLatestSearches: function () {
            let n = localStorage.getItem(this._getLatestSearchesStorageKey());
            return n ? JSON.parse(n) : null;
        },
        _setCurrentInput: function (n) {
            this.$Input = n;
            this.$HolderInput = this._getHolderInput();
        },
        InitializeInput: function (n) {
            this._setCurrentInput(n);
            this.BindInputEvents();
        },
        RemovePopupsIfOpen: function (n) {
            this.RemoveCurrentPopupIfOpen(n);
            this.RemoveAnyPopupIfExist();
        },
        RemoveCurrentPopupIfOpen: function (n) {
            this.IsCurrentPopupOpen() &&
                this.ShouldCloseCurrentPopup(n) &&
                (this.RemoveClassesWhenOpening(),
                this.RemoveRoundInputCorner(),
                this.$Input.next().remove());
        },
        RemoveAnyPopupIfExist: function () {
            $("." + this._c.AutocompleteClass).remove();
        },
        IsCurrentPopupOpen: function () {
            return this._getPopup().length > 0
                ? this._getPopup().has("." + this._c.AutocompleteClass)
                : !1;
        },
        ShouldCloseCurrentPopup: function (n) {
            if (n) {
                const t = $(n.target).attr(
                    this._c.PopupItemSummaryLatestSearchesDeleteAttr
                );
                return !t;
            }
            return !0;
        },
        SelectItem: function (n) {
            if (this.$HolderInput.length > 0) {
                let t = n.attr(this._c.PopupItemSelectableUrlAttr);
                t || (t = n.attr(this._c.ValAttr));
                this.$HolderInput.val(t).trigger("change");
            }
            let t = n
                .find("[" + this._c.PopupItemSelectableTextAttr + "]")
                .text();
            t || (t = n.text());
            const i = this._getDataItemAddExtraHtmlAttr();
            if (i) {
                const n = $(i).text();
                if (n) {
                    const i = this.EscapeRegExpText(n);
                    t = t.replace(new RegExp(i + "([^\\" + i + "]*)$"), "$1");
                }
            }
            this.$Input.val(t);
            $("." + this._c.FocusableInputClass).removeClass(
                this._c.FocusableInputClass
            );
            sessionStorage.setItem("evnt_offerSearch_searchType", "Suggested");
        },
        GetSuggestions: function () {
            this.$Input.val() || this._getDataOpenOnClickAttr() === "true"
                ? this.AjaxGetSuggestions()
                : this.RemovePopupsIfOpen();
        },
        AjaxGetSuggestions: function () {
            let n = this.GetAjaxParams();
            autocompleteService.SetShowSummary(n);
            $.ajax({
                url: this._getDataUrlAttr(),
                type: this._getDataMethodAttr(),
                data: n,
                dataType: this._getAjaxDataType(),
                success: function (n) {
                    if (
                        (autocompleteService.RemovePopupsIfOpen(),
                        n && !$.isEmptyObject(n))
                    ) {
                        const t = autocompleteService.BuildPopup(n);
                        autocompleteService.$Input.after(t);
                        autocompleteService.AddClassesWhenOpening();
                        autocompleteService.SetRoundInputCorner();
                        autocompleteService.BindPopupItemsClick();
                        autocompleteService.SelectFirstOccurrenceIfEnable();
                    }
                    autocompleteService.ResetShowSummary();
                },
                error: function (n) {
                    console.log(n);
                },
            });
        },
        GetAjaxParams: function () {
            let n = {};
            const t = this._getDataExtraParamsAttr();
            t && (n = window[t]());
            const i = this._getDataDependantIdAttr();
            return i && (n.id = $("#" + i).val()), (n.q = this.$Input.val()), n;
        },
        SetShowSummary: function (n) {
            this._getShowSummaryAttr() && !n.q && (this._showSummary = !0);
        },
        ResetShowSummary: function () {
            autocompleteService._showSummary = !1;
        },
        ResetHolderInput: function () {
            this.$HolderInput.val(0);
        },
        BuildPopup: function (n) {
            const t = this.BuildPopupContainer();
            let i = this._showSummary
                ? this.BuildSuggestSummary(n)
                : this.BuildSuggestBody(n);
            return t.html(i);
        },
        BuildPopupContainer: function () {
            return this.CreateTag(this._c.PopupContainerTag).addClass(
                this._c.AutocompleteClass
            );
        },
        CreateTag: function (n) {
            return $("<" + n + ">");
        },
        BuildSuggestSummary: function (n) {
            let t = "";
            return (
                this._getSummaryGenericPreviousLitAttr() &&
                    (t += this.BuildSuggestSummaryPreviousWithTitle(
                        this._getSummaryGenericPreviousLitAttr(),
                        n
                    )),
                this._getSummaryLatestSearchesLitAttr() &&
                    (t += this.BuildSuggestSummaryFromLatestSearches()),
                this._getSummaryGenericLitAttr() &&
                    (t += this.BuildSuggestSummaryWithTitle(
                        this._getSummaryGenericLitAttr(),
                        n
                    )),
                t
            );
        },
        BuildSuggestSummaryFromLatestSearches: function () {
            let n = "";
            const t = this._getLatestSearches();
            if (Array.isArray(t) && t.length > 0) {
                const i = this.CreateTag(this._c.PopupItemTag)
                    .attr(this._c.PopupItemSummaryTitleLatestSearchesAttr, "")
                    .addClass(this._c.PopupItemSummaryTitleClass)
                    .text(this._getSummaryLatestSearchesLitAttr());
                n = i[0].outerHTML;
                t.forEach(function (t) {
                    n += autocompleteService.BuildLatestSearchItem(t);
                });
            }
            return n;
        },
        BuildLatestSearchItem: function (n) {
            let t = "";
            if (n) {
                const i = this.CreateTag(this._c.PopupItemTag),
                    r = this.CreateTag(
                        this._c.PopupItemSummaryLatestSearchesIconTag
                    ).addClass(this._c.PopupItemSummaryLatestSearchesIconClass),
                    u = this.CreateTag(
                        this._c.PopupItemSummaryLatestSearchesTag
                    )
                        .attr("href", n.url)
                        .text(n.title),
                    f = this.CreateTag(
                        this._c.PopupItemSummaryLatestSearchesIconTag
                    )
                        .addClass(
                            this._c
                                .PopupItemSummaryLatestSearchesDeleteContainerIconClass
                        )
                        .html(
                            this.CreateTag(
                                this._c.PopupItemSummaryLatestSearchesIconTag
                            )
                                .addClass(
                                    this._c
                                        .PopupItemSummaryLatestSearchesDeleteIconClass
                                )
                                .attr(
                                    this._c
                                        .PopupItemSummaryLatestSearchesDeleteAttr,
                                    n.date
                                )
                        );
                i.append(r).append(u).append(f);
                t = i[0].outerHTML;
            }
            return t;
        },
        BuildSuggestSummaryPreviousWithTitle: function (n, t) {
            let i = "";
            if (t && t.length >= this._c.SummaryFirstTitleDataLengthToShow) {
                let r = this.CreateTag(this._c.PopupItemTag)
                    .attr(this._c.PopupItemSummaryTitleGenericAttr, "")
                    .addClass(this._c.PopupItemSummaryTitleClass)
                    .text(n);
                i += r[0].outerHTML;
                i += this.BuildSuggestBody(new Array(t.shift()), !0);
            }
            return i;
        },
        BuildSuggestSummaryWithTitle: function (n, t) {
            let i = "";
            if (t && t.length) {
                let r = this.CreateTag(this._c.PopupItemTag)
                    .attr(this._c.PopupItemSummaryTitleGenericAttr, "")
                    .addClass(this._c.PopupItemSummaryTitleClass)
                    .text(n);
                i += r[0].outerHTML;
                i += this.BuildSuggestBody(t, !0);
            }
            return i;
        },
        BuildSuggestBody: function (n, t) {
            const u = this.$Input.val(),
                i = new RegExp("(" + this.EscapeRegExpText(u) + ")", "gi"),
                r = this.CreateTag(this._c.PopupItemHighlightTag)
                    .addClass(this._c.HighlightClass)
                    .text("$1")[0].outerHTML;
            return n[0]
                ? this.BuildPopupListFromList(n, i, r, t)
                : this.BuildPopupListFromDictionary(n, i, r);
        },
        BuildPopupListFromList: function (n, t, i, r) {
            let f = "";
            for (var u = 0; u < n.length; u++) {
                let e;
                e = this._getDataIconDesignEnableAttr()
                    ? this.BuildPopupListIconItem(n[u], t, i, r)
                    : this.BuildPopupListItem(n[u].Key, n[u].Value, t, i);
                f += e[0].outerHTML;
            }
            return f;
        },
        BuildPopupListFromDictionary: function (n, t, i) {
            let r = "";
            for (const u in n) {
                const f = this.BuildPopupListItem(u, n[u], t, i);
                r += f[0].outerHTML;
            }
            return r;
        },
        BuildPopupListItem: function (n, t, i, r) {
            const u = this.CreateTag(this._c.PopupItemTag).attr(
                    this._c.ValAttr,
                    n
                ),
                e = t.replace(i, r);
            u.prepend(e);
            const f = this._getDataItemAddExtraHtmlAttr();
            return f && u.append(f), u;
        },
        BuildPopupListIconItem: function (n, t, i, r) {
            let u = this.CreateTag(this._c.PopupItemTag)
                .attr(this._c.ValAttr, n.Key)
                .attr(this._c.PopupItemSelectableUrlAttr, n.Url);
            const o = this.CreateTag(
                this._c.PopupItemIconContainerTag
            ).addClass(n.IconClasses);
            n.Image &&
                o.attr(
                    "style",
                    "background-image: url(" + n.Image + ") !important"
                );
            let f = this.CreateTag(
                    this._c.PopupItemIconTitleAndSubtitleContainerTag
                ),
                e = this.CreateTag(this._c.PopupItemIconTitleContainerTag).attr(
                    this._c.PopupItemSelectableTextAttr,
                    ""
                );
            n.ShowHref &&
                ((u = this.CreateTag(this._c.PopupItemTag)),
                (f = this.CreateTag(
                    this._c.PopupItemIconHrefTitleAndSubtitleContainerTag
                ).attr(this._c.HrefAttr, n.Url)),
                (e = this.CreateTag(this._c.PopupItemIconTitleContainerTag)));
            const h = this.CreateTag(this._c.PopupItemIconSubtitleContainerTag)
                    .addClass(this._c.PopupItemIconSubtitleContainerClasses)
                    .text(n.SubTitle),
                c = this._showSummary ? n.Title : n.Title.replace(t, i);
            e.append(c);
            f.append(e);
            r || f.append(h);
            u.append(o);
            u.append(f);
            const s = this._getDataItemAddExtraHtmlAttr();
            return s && u.append(s), u;
        },
        SelectFirstOccurrenceIfEnable: function () {
            const n = this._getDataSelectFirstOccurrenceAttr(),
                t = n ? n.toLowerCase() !== "false" : !0;
            if (t) {
                const n = this._getFirstPopupItem();
                this.$Input.val().toLowerCase() === n.text().toLowerCase() &&
                    this.SelectItem(n);
            }
        },
        SelectPreviousPopupItemAndScrollUp: function (n, t) {
            n.removeClass(this._c.ActiveClass);
            t.addClass(this._c.ActiveClass);
            this.SelectItem(t);
            this._offset > this._c.PopupMinOffset &&
                (this._offset -= this.$Input[0].offsetHeight);
            this._getPopup().scrollTop(t[0].offsetTop - this._offset);
        },
        SelectNextPopupItemAndScrollDown: function (n, t) {
            n.removeClass(this._c.ActiveClass);
            t.addClass(this._c.ActiveClass);
            this.SelectItem(t);
            this._offset < this._c.PopupMaxOffset &&
                (this._offset += this.$Input[0].offsetHeight);
            this._getPopup().scrollTop(t[0].offsetTop - this._offset);
        },
        SelectFirstPopupItem: function () {
            const n = this._getFirstPopupItem();
            n.addClass(this._c.ActiveClass);
            this.SelectItem(n);
        },
        AddClassesWhenOpening: function () {
            const n = this._getAddClassesWhenOpeningAttr(),
                t = this.$Input.closest(
                    "[" + this._c.DataAddClassesWhenOpeningTargetAttr + "]"
                );
            n && t.length > 0 && t.addClass(n);
        },
        RemoveClassesWhenOpening: function () {
            const n = this._getAddClassesWhenOpeningAttr(),
                t = this.$Input.closest(
                    "[" + this._c.DataAddClassesWhenOpeningTargetAttr + "]"
                );
            n && t.length > 0 && t.removeClass(n);
        },
        SetRoundInputCorner: function () {
            this.ShouldRoundInputCorner() &&
                this.$Input.css("border-radius", "25px 25px 0px 0px");
        },
        ShouldRoundInputCorner: function () {
            !(this._getDataRoundInputAttr() === !1);
        },
        RemoveRoundInputCorner: function () {
            this.ShouldRoundInputCorner() &&
                this.$Input.css("border-radius", "");
        },
        EscapeRegExpText: function (n) {
            return n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        },
        PerformSuggesterBehavior: function (n) {
            autocompleteService._setCurrentInput($(n.target));
            const t =
                    n.keyCode === autocompleteService._c.EnterKey ||
                    n.keyCode === autocompleteService._c.EscapeKey,
                i =
                    autocompleteService.IsCurrentPopupOpen() &&
                    (n.keyCode === autocompleteService._c.UpArrowKey ||
                        n.keyCode === autocompleteService._c.DownArrowKey);
            if (t) return autocompleteService.RemovePopupsIfOpen(), !0;
            if (i) {
                n.preventDefault();
                const t = autocompleteService._getActiveItem(),
                    i = t.prev(),
                    r = t.next(),
                    u =
                        n.keyCode === autocompleteService._c.UpArrowKey &&
                        t.length > 0 &&
                        i.length > 0,
                    f =
                        n.keyCode === autocompleteService._c.DownArrowKey &&
                        t.length > 0 &&
                        r.length > 0,
                    e =
                        n.keyCode === autocompleteService._c.DownArrowKey &&
                        t.length === 0;
                if (u)
                    autocompleteService.SelectPreviousPopupItemAndScrollUp(
                        t,
                        i
                    );
                else if (f)
                    autocompleteService.SelectNextPopupItemAndScrollDown(t, r);
                else if (e) {
                    const n =
                        autocompleteService.$Input.val() &&
                        !autocompleteService.IsCurrentPopupOpen();
                    n
                        ? autocompleteService.GetSuggestions()
                        : autocompleteService.SelectFirstPopupItem();
                }
            } else {
                const t =
                    n.keyCode !== autocompleteService._c.LeftArrowKey &&
                    n.keyCode !== autocompleteService._c.RightArrowKey;
                t &&
                    (autocompleteService.ResetHolderInput(),
                    autocompleteService.GetSuggestions());
            }
        },
        GetLastSearchesWithoutRemoved: function (n) {
            let t = this._getLatestSearches();
            return (
                t &&
                    t.length > 0 &&
                    (t = t.filter(function (t) {
                        return t.date !== Number(n);
                    })),
                t
            );
        },
        SetLastSearchesIntoLocalStorage: function (n) {
            const t = this._getLatestSearchesStorageKey(),
                i = JSON.stringify(n);
            localStorage.setItem(t, i);
        },
        RemoveCurrentLastSearchItemHtml: function (n) {
            const t = $(n).closest(this._c.PopupItemTag),
                i = t.prev(
                    "[" + this._c.PopupItemSummaryTitleLatestSearchesAttr + "]"
                ),
                r = t.next(
                    "[" + this._c.PopupItemSummaryTitleGenericAttr + "]"
                );
            i.length > 0 && r.length > 0 && i.remove();
            t.remove();
        },
        PerformKeyDownEvent: function (n) {
            return (
                autocompleteService._setCurrentInput($(n.target)),
                n.keyCode === autocompleteService._c.EnterKey
                    ? (n.preventDefault(), !1)
                    : void 0
            );
        },
        PerformFocusOutEvent: function (n) {
            autocompleteService._setCurrentInput($(n.target));
            $("." + autocompleteService._c.AutocompleteClass + ":hover")
                .length === 0 && autocompleteService.RemovePopupsIfOpen();
        },
        PerformItemClickEvent: function (n) {
            let t = $(n.target);
            n.target.hasAttribute(autocompleteService._c.ValAttr) ||
                (t = $(n.target).closest(
                    "[" + autocompleteService._c.ValAttr + "]"
                ));
            t.length > 0 &&
                (autocompleteService.SelectItem(t),
                autocompleteService.RemovePopupsIfOpen(n));
        },
        PerformRemoveLastSearchClickEvent: function (n) {
            const t = $(n.target).attr(
                autocompleteService._c.PopupItemSummaryLatestSearchesDeleteAttr
            );
            if (t) {
                const i = $(n.target)
                        .closest("." + autocompleteService._c.AutocompleteClass)
                        .prev("input"),
                    r = autocompleteService.GetLastSearchesWithoutRemoved(t);
                autocompleteService.SetLastSearchesIntoLocalStorage(r);
                autocompleteService.RemoveCurrentLastSearchItemHtml(n.target);
                i.click().focus();
            }
        },
        CallAnyPerformEvent: function (n) {
            return this._getApplyDebounce()
                ? window._debounce(n, this._c.DebounceTimeout)
                : n;
        },
        InitializeAll: function () {
            $(document).ready(function () {
                $("input[" + autocompleteService._c.DataUrlAttr + "]").each(
                    function (n, t) {
                        $(t).attr(autocompleteService._c.DataUrlAttr) &&
                            autocompleteService.InitializeInput($(t));
                    }
                );
            });
        },
        BindInputEvents: function () {
            this.BindInputKeyDown();
            this.BindInputKeyUp();
            this.BindInputFocusIn();
            this.BindInputFocusOut();
            this.BindPopupItemRemoveLastSearchClick();
        },
        BindInputKeyDown: function () {
            this.$Input.keydown(autocompleteService.PerformKeyDownEvent);
        },
        BindInputKeyUp: function () {
            this.$Input.keyup(
                autocompleteService.CallAnyPerformEvent(
                    autocompleteService.PerformSuggesterBehavior
                )
            );
        },
        BindInputFocusIn: function () {
            autocompleteService._getDataOpenOnClickAttr() &&
                this.$Input.focusin(
                    autocompleteService.CallAnyPerformEvent(
                        autocompleteService.PerformSuggesterBehavior
                    )
                );
        },
        BindInputFocusOut: function () {
            this.$Input.focusout(autocompleteService.PerformFocusOutEvent);
        },
        BindPopupItemsClick: function () {
            autocompleteService
                ._getPopup()
                .children(autocompleteService._c.PopupItemTag)
                .click(autocompleteService.PerformItemClickEvent);
        },
        BindPopupItemRemoveLastSearchClick: function () {
            $(document).on(
                "click",
                "[" + this._c.PopupItemSummaryLatestSearchesDeleteAttr + "]",
                autocompleteService.PerformRemoveLastSearchClickEvent
            );
        },
    }),
    autocompleteService.InitializeAll()),
    (function (n, t) {
        function p(n) {
            return t(n)
                .closest("[" + ki + "]")
                .data().typeSearch;
        }
        function w(n) {
            return t("#" + n + b);
        }
        function ci(n) {
            return t("#" + n + s);
        }
        function ar(n) {
            return t("#" + n + at);
        }
        function h() {
            hi.addClass(i);
        }
        function vr() {
            if (n.searchBoxPreload) {
                const f = rt(),
                    n = localStorage.getItem(st + f);
                n && u.val(n);
                const e = localStorage.getItem(ht + f);
                e && g.val(e);
                const t = localStorage.getItem(ct + f);
                t && r.val(t);
                const o = localStorage.getItem(lt + f);
                o && nt.val(o);
                let i = "";
                if (
                    (n && !t
                        ? (i = n)
                        : !n && t
                        ? (i = t)
                        : n &&
                          t &&
                          y.length &&
                          (i =
                              n +
                              " " +
                              y.data().liteBoxSearchTextSeparator +
                              " " +
                              t),
                    i)
                ) {
                    y.text(i);
                    return;
                }
            }
            n.searchBox !== undefined &&
                n.searchBox.liteText.length > 0 &&
                y.text(n.searchBox.liteText);
        }
        function yr() {
            n.searchBox !== undefined &&
                n.searchBox.isOffersGrid &&
                ai(u.val(), r.val(), g.val(), nt.val());
        }
        function li(n) {
            n.addClass(et);
            setTimeout(function () {
                n.removeClass(et);
            }, 1e3);
        }
        function rt() {
            let n = t("meta[name=meta_ctp]").attr("content");
            return n || (n = 0), n;
        }
        function pr() {
            let t = "";
            n.searchBox !== undefined &&
                n.searchBox.originKinesis.length > 0 &&
                (t = n.searchBox.originKinesis);
            t || (t = "SearchBox");
            sessionStorage.setItem(bi, t);
        }
        function ai(n, t, i, r) {
            let u = rt();
            localStorage.setItem(st + u, n);
            localStorage.setItem(ht + u, i);
            localStorage.setItem(ct + u, t);
            localStorage.setItem(lt + u, r);
        }
        function vi(t, i, r, u, s) {
            f.removeClass(e);
            ti.addClass(o);
            setTimeout(function () {
                ti.removeClass(o);
            }, a);
            ui.addClass(dt);
            setTimeout(function () {
                ui.removeClass(dt);
            }, a);
            pr();
            ai(i, r, u, s);
            n.location = yi(t);
        }
        function yi(t) {
            let i = "";
            return (
                n.searchBox !== undefined &&
                    n.searchBox.baseUrl !== undefined &&
                    n.searchBox.baseUrl.length > 0 &&
                    (i = n.searchBox.baseUrl),
                i + t
            );
        }
        function pi() {
            n.searchBox !== undefined &&
                n.searchBox.originGADevice.length > 0 &&
                n.searchBox.originGAEvent.length > 0 &&
                ga(
                    "send",
                    "event",
                    "DefaultSearch",
                    "Click_" + n.searchBox.originGADevice,
                    n.searchBox.originGAEvent + "_" + n.searchBox.originGADevice
                );
            const t = g.val(),
                o = nt.val(),
                s = t && t && t !== "0",
                h = o && o !== "0",
                i = u
                    .val()
                    .replace(ft, "")
                    .trim()
                    .replaceAll(" ", "-")
                    .toLowerCase(),
                e = r
                    .val()
                    .replace(ft, "")
                    .trim()
                    .replaceAll(" ", "-")
                    .toLowerCase(),
                c = u.data().searchboxQueryBaseprofurl,
                v = r.data().searchboxQueryBaseplaceurl,
                l = r.data().searchboxQueryConcatplaceurl,
                a = r.data().searchboxQueryPlaceReplacewordurl;
            if (s || h) {
                let n = "";
                s && h
                    ? (n = t + o.replace(a, ""))
                    : s && !h
                    ? (n = e ? t + l + e : t)
                    : !s && h && (n = i ? c + i + o.replace(a, "") : o);
                vi(n, u.val(), r.val(), t, o);
            } else if (i || e) {
                let n = c;
                i && e
                    ? (n += i + l + e)
                    : i && !e
                    ? (n += i)
                    : !i && e && (n = v + e);
                vi(n, u.val(), r.val(), t, o);
            } else li(f);
        }
        function wr(n) {
            switch (n.dataset.searchboxTab) {
                case "offers":
                    return "Ofertas buscador";
                case "companyvaluations":
                    return "Empresas buscador";
                case "salaries":
                    return "Salarios buscador";
                default:
                    return "Undefined";
            }
        }
        function br() {
            v.addClass(c);
            tt.removeClass(i);
            fi.removeClass(i);
            ei.removeClass(i);
            wi() && oi.removeClass(i);
        }
        function wi() {
            return oi.find("[href]").length > 0;
        }
        function kr(n) {
            n.removeClass(l);
        }
        function dr() {
            gr();
            nu();
            tu();
        }
        function gr() {
            v.removeClass(c);
            tt.addClass(i);
            ei.addClass(i);
            or.removeClass(l);
        }
        function nu() {
            t("#box_search").removeClass("show_popup");
            v.removeClass(c);
        }
        function tu() {
            hr.click();
        }
        function iu(n) {
            const t = n.split("-");
            return t.length > 1 ? t[0] + "-" + t[1] : n;
        }
        function ru() {
            uu();
            fu();
            eu();
            ou();
            vu();
            su();
            hu();
            cu();
            lu();
            au();
            yu();
            pu();
            wu();
            ku();
        }
        function uu() {
            t(document).on("click", "#" + vt, function () {
                pi();
            });
        }
        function fu() {
            t(document).on("keyup", function (n) {
                it &&
                    (n.keyCode !== 13 || n.isDefaultPrevented()
                        ? u.val().length > 0 || r.val().length > 0
                            ? f.addClass(e)
                            : f.removeClass(e)
                        : pi());
            });
        }
        function eu() {
            t(document).on("focusin", "[id$=" + s + "]", function () {
                it = !0;
            });
            t(document).on("focusout", "[id$=" + s + "]", function () {
                it = !1;
            });
        }
        function ou() {
            t(document).on("click", function (n) {
                const o = t(n.target),
                    v = o.closest("[" + wt + "]"),
                    c = n.target.id.endsWith(s),
                    l = o.data().boxSearch || v.length > 0,
                    a = o.closest(tr).length > 0,
                    y =
                        typeof o.attr(d) == "string" ||
                        o.closest("[" + d + "]").length > 0,
                    b = !!t(n.target).attr(ir);
                if (
                    (c || l || a || b
                        ? t(gt).addClass(ni)
                        : t(gt).removeClass(ni),
                    c || l || a || y)
                ) {
                    if (n.target.value) {
                        const t = p(n.target);
                        if (t) return h(), w(t).removeClass(i);
                    }
                    u.val().length == 0 &&
                        r.val().length == 0 &&
                        f.removeClass(e);
                } else f.removeClass(e);
                hi.addClass(i);
            });
        }
        function su() {
            t(document).on("click", "[id$=" + b + "]", function (n) {
                const t = p(n.target);
                t &&
                    (h(),
                    w(t).removeClass(i),
                    ar(t).val(""),
                    ci(t).val("").click().focus());
            });
        }
        function hu() {
            t(document).on("change", "[id$=" + at + "]", function (n) {
                const t = p(n.target);
                t && ci(t).val() && (h(), w(t).removeClass(i));
                f.addClass(e);
            });
        }
        function cu() {
            t(document).on("click", "[" + d + "]", function () {
                br();
            });
        }
        function lu() {
            t(document).on("click", "[" + gi + "]", function () {
                const n = t("." + l),
                    i = n.length > 0;
                i ? kr(n) : dr();
                autocompleteService && autocompleteService.RemovePopupsIfOpen();
            });
        }
        function au() {
            t(document).on("click", "[" + nr + "]", function () {
                v.removeClass(c);
                tt.addClass(i);
                fi.addClass(i);
            });
        }
        function vu() {
            t(document).on("keyup", "[id$=" + s + "]", function (n) {
                const t = p(n.target);
                n.target.value && t
                    ? (h(), w(t).removeClass(i))
                    : !n.target.value && t && h();
            });
        }
        function yu() {
            t(document).on("click", "[" + k + "]", function () {
                ga("send", "event", "SearchBox", "click", wr(this));
                const n = this.dataset.searchboxTabPos;
                n &&
                    (sr.removeClass(ot),
                    t(this).addClass(ot),
                    cr.removeAttr("class").addClass("pos" + n),
                    n === "1" && wi() ? si.removeClass(i) : si.addClass(i));
            });
        }
        function pu() {
            t(document).on("click", "[" + di + "]", function () {
                t(this)
                    .closest("[" + kt + "]")
                    .addClass(l);
                t(document).scrollTop(0);
            });
        }
        function wu() {
            t(document).on("click", "#" + yt, function () {
                bu();
            });
        }
        function bu() {
            n.searchBox !== undefined &&
                n.searchBox.originGADevice.length > 0 &&
                n.searchBox.originGAEvent.length > 0 &&
                ga(
                    "send",
                    "event",
                    "CompanySearch",
                    "Click_" + n.searchBox.originGADevice,
                    n.searchBox.originGAEvent + "_" + n.searchBox.originGADevice
                );
            const t = ur.val(),
                i = t && t !== "0";
            if (i) {
                ii.addClass(o);
                setTimeout(function () {
                    ii.removeClass(o);
                }, a);
                const n = iu(t);
                ut(n);
            } else {
                const n = rr.data().urlredirectIfEmpty;
                n && ut(n);
            }
        }
        function ku() {
            t(document).on("click", "#" + pt, function () {
                du();
            });
        }
        function du() {
            n.searchBox !== undefined &&
                n.searchBox.originGADevice.length > 0 &&
                n.searchBox.originGAEvent.length > 0 &&
                ga(
                    "send",
                    "event",
                    "SalarySearch",
                    "Click_" + n.searchBox.originGADevice,
                    n.searchBox.originGAEvent + "_" + n.searchBox.originGADevice
                );
            const t = fr.val(),
                i = t && t !== "0";
            i
                ? (ri.addClass(o),
                  setTimeout(function () {
                      ri.removeClass(o);
                  }, a),
                  ut(t))
                : li(er);
        }
        function ut(t) {
            n.location = yi(t);
        }
        if (!n || !t) throw "Missing dependency for searchbox.js";
        const ft = /[^\wèéòóàáùúìíñ\s]/gi,
            et = "input-validation-error",
            i = "hide",
            c = "flowHid",
            ot = "sel",
            e = "focus",
            l = "input_focus",
            bi = "evnt_offerSearch_searchBox",
            st = "sbox_profcat_v_",
            ht = "sbox_profcat_u_",
            ct = "sbox_place_v_",
            lt = "sbox_place_u_",
            ki = "data-type-search",
            s = "-search-input",
            at = "-search-input-holder",
            b = "-clean-button",
            vt = "search-button",
            yt = "company-search-button",
            pt = "salary-search-button",
            wt = "data-box-search-inputs-container",
            bt = "data-lastsearches-container",
            kt = "data-input-focusable-container",
            di = "data-input-focusable",
            k = "data-searchbox-tab",
            d = "data-lite-box-search",
            gi = "data-box-search-popup-close",
            nr = "data-box-search-close",
            dt = "laoding_box",
            o = "i_loading",
            tr = ".autocomplete",
            gt = "#header_menu",
            ni = "open",
            ir = "data-ls-delete",
            a = 1e3,
            v = t("body"),
            u = t("#prof-cat-search-input"),
            r = t("#place-search-input"),
            rr = t("#company-search-input"),
            g = t("#prof-cat-search-input-holder"),
            nt = t("#place-search-input-holder"),
            ur = t("#company-search-input-holder"),
            fr = t("#salary-search-input-holder"),
            ti = t("#" + vt),
            ii = t("#" + yt),
            ri = t("#" + pt),
            ui = t(".parrilla_oferta .w100"),
            tt = t("[data-box-search-overlay]"),
            f = t("[" + wt + "]"),
            er = t("[data-box-salary-inputs-container]"),
            fi = t("[data-box-search-container]"),
            ei = t("[data-box-search-popup]"),
            oi = t("[" + bt + "]"),
            si = t("[" + bt + "]:last"),
            hi = t("[id$=" + b + "]"),
            or = t("[" + kt + "]"),
            sr = t("[" + k + "]"),
            hr = t("[" + k + "=offers]"),
            y = t("[data-lite-box-search-text]"),
            cr = t("#slider-container");
        let it = !1;
        try {
            yr();
            vr();
            ru();
        } catch (lr) {
            console.error(lr);
        }
        n.GetCompanySuggestExtraParams = function () {
            return { p: rt() };
        };
    })(window, $);
