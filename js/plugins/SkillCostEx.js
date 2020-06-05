//=============================================================================
// TMPlugin - �X�L���R�X�g�g��
// �o�[�W����: 1.1.1
// �ŏI�X�V��: 2017/09/25
// �z�z��    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc MP��TP�̑����HP��A�C�e���������X�L����
 * �ݒ�ł���悤�ɂȂ�܂��B
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param hpVNumberId
 * @desc �X�L���g�p���ɃR�X�g����O�̎c��HP��������ϐ��ԍ��B
 * �����l: 0 ( 1 �ȏ���w�肷��ƗL���ɂȂ�܂�)
 * @default 0
 *
 * @param mpVNumberId
 * @desc �X�L���g�p���ɃR�X�g����O�̎c��MP��������ϐ��ԍ��B
 * �����l: 0 ( 1 �ȏ���w�肷��ƗL���ɂȂ�܂�)
 * @default 0
 *
 * @param tpVNumberId
 * @desc �X�L���g�p���ɃR�X�g����O�̎c��TP��������ϐ��ԍ��B
 * �����l: 0 ( 1 �ȏ���w�肷��ƗL���ɂȂ�܂�)
 * @default 0
 *
 * @param ignoreEnemyItemCost
 * @desc �G���X�L�����g�p����ۂɃA�C�e���R�X�g�𖳎����邩�ǂ���
 * �����l: 1 ( 0 = �p�[�e�B�̃A�C�e�������� / 1 = ����)
 * @default 1
 *
 * @help
 * TMPlugin - �X�L���R�X�g�g�� ver1.1.1
 * 
 * �g����:
 * 
 *   �X�L���̃������Ƀ^�O���������ނ��ƂŃR�X�g��ǉ��ł��܂��B
 *
 *   �f�[�^�x�[�X�� ���Ղ��Ȃ� �ɐݒ肵���A�C�e�����R�X�g�Ƃ����ꍇ�A
 *   �X�L���g�p���ɕK�v��������͂��Ȃ��Ƃ��������ɂȂ�܂��B
 *
 *   �g�o���R�X�g�Ƃ��Đݒ肵���ꍇ�A�c��g�o���R�X�g�Ɠ��l�ł�
 *   �g�p�ł��܂���B�������A�X�L���� hpCostNoSafety �^�O������ꍇ��
 *   �c��g�o���R�X�g�ȉ��ł��X�L�����g�p�ł��܂��B
 *   ���R�g�p�����A�N�^�[�͐퓬�s�\�ɂȂ�܂��B
 *
 *   �o���l���R�X�g�Ƃ��Đݒ肵�A�ꏏ�� expCostNoLevelDown �^�O��
 *   �ݒ肵�Ă���ꍇ�A�R�X�g�̎x�����ɂ���ă��x����������󋵂ł�
 *   �X�L���̎g�p���ł��Ȃ��Ȃ�܂��B
 *
 *   �v���O�C���R�}���h�͂���܂���B
 *
 *   ���̃v���O�C���� RPG�c�N�[��MV Version 1.5.1 �œ���m�F�����Ă��܂��B
 * 
 *   ���̃v���O�C����MIT���C�Z���X�̂��Ƃɔz�z���Ă��܂��A���p���p�A
 *   �����A�Ĕz�z�ȂǁA���R�ɂ��g�����������܂��B
 * 
 * 
 * �v���O�C���p�����[�^:
 * 
 *   �R�X�g����O�̎c��HP(MP)���w�肵���ϐ��ɑ�����A����ɂ��
 *   �����HP(MP)�̗ʂ��_���[�W�v�Z���ɔ��f�����邱�Ƃ��ł��܂��B
 *   hpVNumberId �̒l�� 1 �ɂ���ƁA�Q�[���ϐ��P�ԂɃR�X�g����O��
 *   �c��HP���������܂��B�_���[�W�v�Z���� $gameVariables.value(1) ��
 *   �����΃Q�[���ϐ��P�Ԃ̒l���Q�Ƃ��邱�Ƃ��ł��܂��B
 *
 * 
 * �������^�O�i�X�L���j:
 * 
 *   <hpCost:10>          # �X�L���̃R�X�g�Ƃ��Ăg�o�P�O��ݒ�
 *   <hpRateCost:50>      # �X�L���̃R�X�g�Ƃ��čő�g�o�̂T�O����ݒ�
 *   <hpCRateCost:25>     # �X�L���̃R�X�g�Ƃ��Ďc��g�o�̂Q�T����ݒ�
 *   <hpCostNoSafety>     # �g�o�R�X�g�x�����ɂ��퓬�s�\��������
 *   <mpRateCost:100>     # �X�L���̃R�X�g�Ƃ��čő�l�o�̂P�O�O����ݒ�
 *   <mpCRateCost:50>     # �X�L���̃R�X�g�Ƃ��Ďc��l�o�̂T�O����ݒ�
 *   <mpCostNoMcr>        # �l�o�R�X�g��������w�l�o����x�̌��ʂ����O
 *   <tpCRateCost:50>     # �X�L���̃R�X�g�Ƃ��Ďc��s�o�̂T�O����ݒ�
 *   <ignoreTpCost>       # �X�L���̂s�o�R�X�g�s�����A�s�o�S����Ŕ����\
 *   <itemCost:I1*2>      # �X�L���̃R�X�g�Ƃ��ăA�C�e���P�ԂQ��ݒ�
 *   <itemCost:W2*1>      # �X�L���̃R�X�g�Ƃ��ĕ���Q�ԂP��ݒ�
 *   <itemCost:A5*1>      # �X�L���̃R�X�g�Ƃ��Ėh��T�ԂP��ݒ�
 *   <expCost:50>         # �X�L���̃R�X�g�Ƃ��Čo���l�T�O��ݒ�
 *   <expCostNoLevelDown> # �o���l�R�X�g�ɂ�郌�x���_�E�����֎~
 *   <goldCost:100>       # �X�L���̃R�X�g�Ƃ��Ă����P�O�O�f��ݒ�
 *   <vnCost:3*1>         # �X�L���̃R�X�g�Ƃ��ăQ�[���ϐ��R�Ԃ̒l�P��ݒ�
 *
 * 
 * vnCost�^�O�̓���Ȏg����:
 * 
 *   �������^�O vnCost �̂ݐ��䕶���𗘗p���ĕϐ��̒��g���p�����[�^�Ƃ���
 *   �ݒ肷�邱�Ƃ��ł��܂��B
 *   <vnCost:\V[14]*\V[15]>
 *   ���Ƃ��Ώ�L�̂悤�ȃ^�O�������X�L�����g�p����ۂɁA�ϐ��P�S�Ԃ�
 *   �l�� 16 �A�ϐ��P�T�Ԃ̒l�� 3 �������ꍇ�́A�ϐ��P�U�Ԃ̒l���R����
 *   ���邱�ƂɂȂ�܂��B
 */

var Imported = Imported || {};
Imported.TMSkillCostEx = true;

var TMPlugin = TMPlugin || {};
TMPlugin.SkillCostEx = {};
TMPlugin.SkillCostEx.Parameters = PluginManager.parameters('TMSkillCostEx');
TMPlugin.SkillCostEx.HpVNumberId = +(TMPlugin.SkillCostEx.Parameters['hpVNumberId'] || 0);
TMPlugin.SkillCostEx.MpVNumberId = +(TMPlugin.SkillCostEx.Parameters['mpVNumberId'] || 0);
TMPlugin.SkillCostEx.TpVNumberId = +(TMPlugin.SkillCostEx.Parameters['tpVNumberId'] || 0);
TMPlugin.SkillCostEx.IgnoreEnemyItemCost = TMPlugin.SkillCostEx.Parameters['ignoreEnemyItemCost'] === '1';

(function() {

  //-----------------------------------------------------------------------------
  // Game_BattleBase
  //

  Game_BattlerBase.prototype.skillHpCost = function(skill) {
    var result = 0;
    if (skill.meta.hpCost) {
      result += +skill.meta.hpCost;
    }
    if (skill.meta.hpRateCost) {
      result += +skill.meta.hpRateCost * this.mhp / 100;
    }
    if (skill.meta.hpCRateCost) {
      result += +skill.meta.hpCRateCost * this._hp / 100;
    }
    return Math.floor(result);
  };
  
  Game_BattlerBase.prototype.skillMpCost = function(skill) {
    var result = skill.mpCost;
    if (skill.meta.mpRateCost) {
      result += +skill.meta.mpRateCost * this.mmp / 100;
    }
    if (skill.meta.mpCRateCost) {
      result += +skill.meta.mpCRateCost * this._mp / 100;
    }
    if (!skill.meta.mpCostNoMcr) {
      result *= this.mcr;
    }
    return Math.floor(result);
  };

  Game_BattlerBase.prototype.skillTpCost = function(skill) {
    var result = skill.tpCost;
    if (skill.meta.tpCRateCost) {
      result += +skill.meta.tpCRateCost * this._tp / 100;
    }
    result = Math.floor(result);
    if (skill.meta.ignoreTpCost && result > this._tp) result = this._tp;
    return result;
  };

  Game_BattlerBase.prototype.skillItemCost = function(skill) {
    if (!this.isActor() && TMPlugin.SkillCostEx.IgnoreEnemyItemCost) {
      return null;
    }
    if (skill.meta.itemCost) {
      var re = /(i|w|a)(\d+)\*(\d+)/i;
      var match = re.exec(skill.meta.itemCost);
      if (match) {
        var itemCost = {};
        var s = match[1].toUpperCase();
        if (s === 'I') {
          itemCost.item = $dataItems[+match[2]];
        } else if (s === 'W') {
          itemCost.item = $dataWeapons[+match[2]];
        } else {
          itemCost.item = $dataArmors[+match[2]];
        }
        itemCost.num = +match[3];
        return itemCost;
      }
    }
    return null;
  };

  Game_BattlerBase.prototype.skillExpCost = function(skill) {
    return !this.isEnemy() && skill.meta.expCost ? +skill.meta.expCost : 0;
  };
  
  Game_BattlerBase.prototype.skillGoldCost = function(skill) {
    return !this.isEnemy() && skill.meta.goldCost ? +skill.meta.goldCost : 0;
  };
  
  Game_BattlerBase.prototype.skillVNumberCost = function(skill) {
    if (skill.meta.vnCost) {
      var result = {};
      var vnCost = skill.meta.vnCost.split('*');
      var re = /\\V\[(\d+)\]/i;
      var match = re.exec(vnCost[0]);
      result.index = match ? $gameVariables.value(+match[1]) : +vnCost[0];
      var match = re.exec(vnCost[1]);
      result.num = match ? $gameVariables.value(+match[1]) : +vnCost[1];
      return result;
    }
    return null;
  };

  var _Game_BattleBase_canPaySkillCost = Game_BattlerBase.prototype.canPaySkillCost;
  Game_BattlerBase.prototype.canPaySkillCost = function(skill) {
    if (!this.canPaySkillHpCost(skill) ||
        !this.canPaySkillItemCost(skill) ||
        !this.canPaySkillExpCost(skill) ||
        !this.canPaySkillGoldCost(skill) ||
        !this.canPaySkillVNumberCost(skill)) {
      return false;
    }
    return _Game_BattleBase_canPaySkillCost.call(this, skill);
  };

  Game_BattlerBase.prototype.canPaySkillHpCost = function(skill) {
    if (skill.meta.hpCostNoSafety) return true;
    var hpCost = this.skillHpCost(skill);
    return hpCost <= 0 || this._hp > hpCost;
  };
  
  Game_BattlerBase.prototype.canPaySkillItemCost = function(skill) {
    var itemCost = this.skillItemCost(skill);
    return !itemCost || $gameParty.numItems(itemCost.item) >= itemCost.num;
  };
  
  Game_BattlerBase.prototype.canPaySkillExpCost = function(skill) {
    var expCost = this.skillExpCost(skill);
    return expCost === 0 || (this.currentExp() >= expCost &&
           (!skill.meta.expCostNoLevelDown || this.currentExp() - expCost >=
           this.currentLevelExp()));
  };
  
  Game_BattlerBase.prototype.canPaySkillGoldCost = function(skill) {
    return $gameParty.gold() >= this.skillGoldCost(skill);
  };
  
  Game_BattlerBase.prototype.canPaySkillVNumberCost = function(skill) {
    var vnCost = this.skillVNumberCost(skill);
    return !vnCost || $gameVariables.value(vnCost.index) >= vnCost.num;
  };
  
  var _Game_BattleBase_paySkillCost = Game_BattlerBase.prototype.paySkillCost;
  Game_BattlerBase.prototype.paySkillCost = function(skill) {
    if (TMPlugin.SkillCostEx.HpVNumberId > 0) {
      $gameVariables.setValue(TMPlugin.SkillCostEx.HpVNumberId, this._hp);
    }
    if (TMPlugin.SkillCostEx.MpVNumberId > 0) {
      $gameVariables.setValue(TMPlugin.SkillCostEx.MpVNumberId, this._mp);
    }
    if (TMPlugin.SkillCostEx.TpVNumberId > 0) {
      $gameVariables.setValue(TMPlugin.SkillCostEx.TpVNumberId, this._tp);
    }
    this._hp -= Math.min(this.skillHpCost(skill), this._hp);
    var itemCost = this.skillItemCost(skill);
    if (itemCost && this.isItemCostValid(itemCost.item)) {
      $gameParty.loseItem(itemCost.item, itemCost.num, false)
    }
    var expCost = this.skillExpCost(skill);
    if (expCost) {
      var newExp = this.currentExp() - expCost;
      this.changeExp(newExp, this.shouldDisplayLevelUp());
    }
    $gameParty.loseGold(this.skillGoldCost(skill));
    var vnCost = this.skillVNumberCost(skill);
    if (vnCost) {
      var n = $gameVariables.value(vnCost.index) - vnCost.num;
      $gameVariables.setValue(vnCost.index, n);
    }
    _Game_BattleBase_paySkillCost.call(this, skill);
  };
  
  Game_BattlerBase.prototype.isItemCostValid = function(item) {
    return !DataManager.isItem(item) || item.consumable;
  };

})();