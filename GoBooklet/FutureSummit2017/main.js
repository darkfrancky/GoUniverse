"use strict";
/**
 * User: Ilja.Kirillov
 * Date: 24.05.2017
 * Time: 16:29
 */

window.onload = OnDocumentReady;

function OnDocumentReady()
{
	$('#flipbook').turn({gradients: true});


	var oGame1 = GoBoardApi.Embed("bookGame1", {
		boardMode  : "viewer",
		width      : 500,
		boardTheme : "BookStyle",
		sgfData    : "(;GM[1]FF[4]CA[UTF-8]AP[WebGoBoard:0.10.6]RU[Chinese]SZ[19]KM[7.5]HA[0]TM[7200]OT[3x60 byo-yomi]RE[W+R]GN[AlphaGo vs. Ke Jie Game 1]DT[2016-03-09]PB[Lee Sedol]BR[9p]PW[AlphaGo]WR[9p]EV[Deepmind Challenge Match]RO[1]PC[Four Season Hotel, Seoul  , Korea]SO[gokifu.com]US[The fabulous Toe];B[qd];W[dd];B[pq];W[dp];B[fc];W[cf];B[ql];W[od];B[ld];W[qc];B[rc];W[pc];B[re];W[of];B[pg];W[og];B[ph];W[id];B[lf];W[oh];B[pi];W[lh];B[kh];W[ke];B[le];W[lg];B[kg];W[kf];B[ne];W[oe];B[jc];W[ic];B[jd];W[ie];B[je];W[jf];B[if];W[jg];B[li];W[mi];B[hf];W[ih];B[mb];W[gd];B[ki];W[mj];B[kk];W[ib];B[ob];W[ml];B[lm];W[nc];B[nb];W[kb];B[lc];W[mm];B[ln];W[kl];B[ll];W[lk];B[jj];W[jl];B[hj];W[hi];B[gj];W[gf];B[ii];W[jh];B[ij];W[mn];B[lo];W[mo];B[lp];W[mp];B[lq];W[mq];B[im];W[qo];B[fq];W[gg];B[cn];W[dn];B[dm];W[fp];B[gp];W[gq];B[fr];W[co];B[en];W[do];B[ep];W[cm];B[dl];W[lr];B[kr];W[rb];B[jb];W[ja];B[mf];W[mh];B[nd];W[qj];B[pj];W[qk];B[pl];W[pk];B[ok];W[rh];B[rl];W[qf];B[ri];W[rf];B[pf];W[qe];B[qh];W[cc];B[bn];W[bm];B[bl];W[bo];B[rg];W[mr];B[po];W[jr];B[kq];W[pn];B[oo];W[qp];B[on];W[pp];B[op];W[qq];B[or];W[pr];B[oq];W[pd];B[qr];W[rr];B[ps];W[rs];B[rn];W[ro];B[qn];W[so];B[cl];W[an];B[ks];W[om];B[ol];W[ci];B[dr];W[dj];B[hh];W[hg];B[bq];W[cq];B[cr];W[bp];B[dq];W[br];B[cp];W[ap];B[ek];W[fi];B[bj];W[bi];B[pb];W[qb];B[sf];W[rd];B[ai];W[ah];B[aj];W[bh];B[gi];W[fj];B[fk];W[oc];B[mc];W[nm];B[pm];W[cj];B[al];W[aq];B[gh];W[fh])"
	});
	GoBoardApi.Set_ShowTarget(oGame1, false);


	$("#flipbook").turn("resize");

	GoBoardApi.Update_Size(oGame1);

	// $("#flipbook").bind("turning", function(event, page, view)
	// {
	// 	GoBoardApi.Update_Size(oGame1);
	// });

}