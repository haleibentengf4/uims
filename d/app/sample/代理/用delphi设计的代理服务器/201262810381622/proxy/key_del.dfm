object keydel: Tkeydel
  Left = 418
  Top = 371
  BorderStyle = bsDialog
  Caption = '去除过滤关键字'
  ClientHeight = 99
  ClientWidth = 212
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  FormStyle = fsStayOnTop
  OldCreateOrder = False
  Position = poScreenCenter
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 14
    Top = 8
    Width = 103
    Height = 16
    Caption = '关键字列表：'
    Font.Charset = GB2312_CHARSET
    Font.Color = clNavy
    Font.Height = -16
    Font.Name = '宋体'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object SpeedButton1: TSpeedButton
    Left = 24
    Top = 64
    Width = 49
    Height = 22
    Caption = '去 除'
    Font.Charset = GB2312_CHARSET
    Font.Color = clNavy
    Font.Height = -14
    Font.Name = '宋体'
    Font.Style = [fsBold]
    ParentFont = False
    OnClick = SpeedButton1Click
  end
  object SpeedButton3: TSpeedButton
    Left = 136
    Top = 64
    Width = 49
    Height = 22
    Caption = '关 闭'
    Font.Charset = GB2312_CHARSET
    Font.Color = clNavy
    Font.Height = -14
    Font.Name = '宋体'
    Font.Style = [fsBold]
    ParentFont = False
    OnClick = SpeedButton3Click
  end
  object ComboBox1: TComboBox
    Left = 16
    Top = 32
    Width = 177
    Height = 24
    Font.Charset = GB2312_CHARSET
    Font.Color = clNavy
    Font.Height = -16
    Font.Name = '宋体'
    Font.Style = []
    ItemHeight = 16
    ParentFont = False
    TabOrder = 0
  end
end
